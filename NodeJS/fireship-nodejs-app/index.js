const express = require("express");

const app = express();

// Callback Hell
const readFileCallbackFn = require("fs").readFile;

app.get("/hell", (req, res) => {
  readFileCallbackFn("./home.html", "utf8", (err, html) => {
    if (err) {
      res.status(500).send("An error occurred.");
    }
    res.send(html);
  });
});

// Promises
const { readFile } = require("fs").promises;

app.get("/", async (req, res) => {
  res.send(await readFile("./home.html", "utf8"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running... \nAvailable at: http://localhost:3000/");
});
