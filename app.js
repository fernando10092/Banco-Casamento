const express = require("express");

const rotaProdutos = require("./routers/produtos");

const app = express();

app.use("/produtos", rotaProdutos);

module.exports = app;