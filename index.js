const express = require("express");
const path = require("path");
const morgan = require("morgan");
const ejs = require("ejs");
const employee = require("./employee.json");
const app = express();
const port = 6500;
app.use(express.urlencoded());
app.use(express.json());
app.use(morgan("combined")); // http logger
app.set("view engine", "ejs"); // set view engine

app.get("/", (req, res) => {
  res.render("home");
  // res.status(200).json(employee);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
