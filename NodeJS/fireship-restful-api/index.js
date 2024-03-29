const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json()); // Use Middleware to parse JSON (it's no the default behavior)

app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: "👕",
    size: "L",
  });
});

app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({ message: "We need a logo!" });
  }

  res.send({
    tshirt: `👕 with your ${logo} and ID of ${id}`,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}/`);
});
