// index.js
//reload environment
require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT;
console.log("Port: " + port);

app.get("/", (req, res) => {
  res.send("Hello, Docker with Express!");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${port}`);
});
