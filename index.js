const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 5500;

app.use(morgan("combined"));

app.get("/", (req, res) => {
  return res.send("<h1>Alo 223</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
