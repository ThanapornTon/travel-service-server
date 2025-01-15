const bodyParser = require("body-parser");
const express = require("express");
const cors = require ("cors")
const travellerRoute = require ('./routes/traveller.routes.js');
const travelRoute = require('./routes/travel.routes.js');


require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(cors())
app.use('/traveller', travellerRoute);
app.use('/travel', travelRoute);

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log("Server is running on port" + PORT + "...");
});
