export class RestAPI {
  constructor(data) {
    this.users = Array.from(data.users);
  }

  get(url) {
    const [endpoint, params] = url.split('?');

    switch(endpoint) {
      case '/users': {
        const paramUser = params?.split('=')[1];

        return paramUser ? { users: [this.users.find(user => user.name === paramUser)]} : { users: this.users };
      }
    }
  }

  post(url, payload) {
    switch (url) {
      case '/add': {
        const newUser = {
          name: payload.user,
          owes: {},
          owed_by: {},
          balance: 0
        }

        this.users.push(newUser);

        return newUser;
      }
      case '/iou': {
        const { lender, borrower, amount } = payload;

        const borrowerUser = this.users.find(user => user.name === borrower);
        const lenderUser = this.users.find(user => user.name === lender);

        if (!borrowerUser || !lenderUser) throw new Error('User not found');

        const lenderOwesBorrower = Object.entries(lenderUser.owes).find(([key]) => key === borrower);

        if (lenderOwesBorrower) {
            const [, debt] = lenderOwesBorrower;
            const remainingDebt = amount - debt;

            if (remainingDebt > 0) {
                delete lenderUser.owes[borrower];
                delete borrowerUser.owed_by[lender];

                borrowerUser.owes[lender] = remainingDebt;
                lenderUser.owed_by[borrower] = remainingDebt;
            } else if (remainingDebt === 0) {
                delete lenderUser.owes[borrower];
                delete borrowerUser.owed_by[lender];
            } else {
                lenderUser.owes[borrower] -= amount;
                borrowerUser.owed_by[lender] -= amount;
            }
        } else {
            borrowerUser.owes[lender] = amount;
            lenderUser.owed_by[borrower] = amount;
        }

        borrowerUser.balance = Object.values(borrowerUser.owed_by).reduce((sum, val) => sum + val, 0) - Object.values(borrowerUser.owes).reduce((sum, val) => sum + val, 0);
        lenderUser.balance = Object.values(lenderUser.owed_by).reduce((sum, val) => sum + val, 0) - Object.values(lenderUser.owes).reduce((sum, val) => sum + val, 0);

        return { users: [borrowerUser, lenderUser].sort((a, b) => a.name.localeCompare(b.name)) };
      }
    }
  }
}
