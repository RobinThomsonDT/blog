const express = require("express");
const path = require("path");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 6500;
app.use(morgan("combined")); // http logger
app.engine("handlebars", engine()); // template engine
app.set("view engine", "handlebars");
app.set("view", path.join(__dirname, "resource\\view"));
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
