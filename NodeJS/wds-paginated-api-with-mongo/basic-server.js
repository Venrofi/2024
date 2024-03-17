const express = require("express");
const app = express();

const users = [
	{ id: 1, name: "John Doe" },
	{ id: 2, name: "Jane Doe" },
	{ id: 3, name: "Jim Doe" },
	{ id: 4, name: "Jill Doe" },
	{ id: 5, name: "Jack Doe" },
	{ id: 6, name: "Jenny Doe" },
	{ id: 7, name: "Jerry Doe" },
	{ id: 8, name: "Judy Doe" },
	{ id: 9, name: "Jesse Doe" },
	{ id: 10, name: "Jamie Doe" },
	{ id: 11, name: "Jasmine Doe" },
	{ id: 12, name: "Jasper Doe" },
	{ id: 13, name: "Jade Doe" },
	{ id: 14, name: "Jax Doe" },
	{ id: 15, name: "Jared Doe" },
];

const posts = [
	{ id: 1, title: "Post 1" },
	{ id: 2, title: "Post 2" },
	{ id: 3, title: "Post 3" },
	{ id: 4, title: "Post 4" },
	{ id: 5, title: "Post 5" },
	{ id: 6, title: "Post 6" },
	{ id: 7, title: "Post 7" },
	{ id: 8, title: "Post 8" },
	{ id: 9, title: "Post 9" },
	{ id: 10, title: "Post 10" },
	{ id: 11, title: "Post 11" },
	{ id: 12, title: "Post 12" },
	{ id: 13, title: "Post 13" },
	{ id: 14, title: "Post 14" },
	{ id: 15, title: "Post 15" },
];

// Using middleware function to paginate data gives flexibility and reusability
app.get("/users", paginateData(users), (req, res) => {
	return res.json(res.paginatedData);
});

app.get("/posts", paginateData(posts), (req, res) => {
	return res.json(res.paginatedData);
});

// Middleware function that executes before the route handler
function paginateData(data) {
	return (req, res, next) => {
		const page = parseInt(req.query.page);
		const limit = parseInt(req.query.limit);

		const startIndex = (page - 1) * limit;
		const endIndex = page * limit;

		const result = {};

		if (startIndex > 0) {
			result.previous = { page: page - 1, limit: limit };
		}

		if (endIndex < data.length) {
			result.next = { page: page + 1, limit: limit };
		}

		result.data = data.slice(startIndex, endIndex);

		res.paginatedData = result;
		next();
	};
}

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
