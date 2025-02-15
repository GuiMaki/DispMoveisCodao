const { response } = require("express");
const express = require("express");

const app = express();

app.get("/oi", (request, response) => {
    return response.send("Hello World!!!!");
});

app.get("/tchau", (request, response) => {
    return response.send("Bye World!!!!");
});

app.listen(3000);