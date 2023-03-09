const express = require("express");

let app = express();

app.get("/", (Request, Response) => {
  Response.send("Express JS");
});

module.exports = app;
