const express = require("express");
const app = express();
const port = 31031;
const axios = require("axios");

app.get("/", (reg, res) => {
    res.send("Hello World!");
});
