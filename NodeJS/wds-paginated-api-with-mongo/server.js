const express = require("express");
const mongoose = require("mongoose");
const User = require("./users");
const Post = require("./posts");

const app = express();
mongoose.connect("mongodb://localhost/wds-pagination");

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", async () => {
	console.log("Connected to the Mongo Database!");

	if ((await User.countDocuments().exec()) === 0) {
		Promise.all([
			User.create({ name: "John Doe" }),
			User.create({ name: "Jane Doe" }),
			User.create({ name: "John Smith" }),
			User.create({ name: "Jane Smith" }),
			User.create({ name: "John Johnson" }),
			User.create({ name: "Jane Johnson" }),
			User.create({ name: "John Williams" }),
			User.create({ name: "Jane Williams" }),
			User.create({ name: "John Brown" }),
			User.create({ name: "Jane Brown" }),
			User.create({ name: "John Jones" }),
			User.create({ name: "Jane Jones" }),
			User.create({ name: "John Davis" }),
			User.create({ name: "Jane Davis" }),
			User.create({ name: "John Miller" }),
		]).then(() => console.log("Added Users 🙋"));
	}

	if ((await Post.countDocuments().exec()) === 0) {
		Promise.all([
			Post.create({ title: "Post 1", content: "Content 1" }),
			Post.create({ title: "Post 2", content: "Content 2" }),
			Post.create({ title: "Post 3", content: "Content 3" }),
			Post.create({ title: "Post 4", content: "Content 4" }),
			Post.create({ title: "Post 5", content: "Content 5" }),
			Post.create({ title: "Post 6", content: "Content 6" }),
			Post.create({ title: "Post 7", content: "Content 7" }),
			Post.create({ title: "Post 8", content: "Content 8" }),
			Post.create({ title: "Post 9", content: "Content 9" }),
			Post.create({ title: "Post 10", content: "Content 10" }),
			Post.create({ title: "Post 11", content: "Content 11" }),
			Post.create({ title: "Post 12", content: "Content 12" }),
			Post.create({ title: "Post 13", content: "Content 13" }),
			Post.create({ title: "Post 14", content: "Content 14" }),
			Post.create({ title: "Post 15", content: "Content 15" }),
			Post.create({ title: "Post 16", content: "Content 16" }),
		]).then(() => console.log("Added Posts 📝"));
	}
});

app.get("/users", paginateData(User), (req, res) => {
	res.json(res.paginatedData);
});

app.get("/posts", paginateData(Post), (req, res) => {
	res.json(res.paginatedData);
});

// Middleware function that executes before the route handler
function paginateData(data) {
	return async (req, res, next) => {
		const page = parseInt(req.query.page);
		const limit = parseInt(req.query.limit);

		const startIndex = (page - 1) * limit;
		const endIndex = page * limit;

		const result = {};

		if (startIndex > 0) {
			result.previous = { page: page - 1, limit: limit };
		}

		if (endIndex < (await data.countDocuments().exec())) {
			result.next = { page: page + 1, limit: limit };
		}

		try {
			result.data = await data
				.find()
				.limit(limit)
				.skip(startIndex)
				.exec();
			res.paginatedData = result;
			next();
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	};
}

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
