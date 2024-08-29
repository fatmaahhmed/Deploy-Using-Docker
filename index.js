// index.js
//reload environment
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const connection = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mongo:${process.env.DB_PORT}`;
mongoose.connect(connection);
console.log(connection);

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDBb");
});
mongoose.connection.on("error", (err) => {
  console.log("Error connecting to MongoDB: ");
});

const port = process.env.PORT;
console.log("Port: " + port);

app.get("/", (req, res) => {
  res.send("Hello, Docker with Express!");
});
app.get("/allusers", (req, res) => {
  res.send("Hello, All users here!");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${port}`);
});
