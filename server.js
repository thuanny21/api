const express = require("express");


const app = express();

app.get("/", (req, res) => {
    res.send("Hello Thuanny");
});

app.listen(3002);