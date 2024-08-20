// index.js
const express = require("express");
const app = express();

const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello, Docker with Express!hi hi");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${port}`);
});
