const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
