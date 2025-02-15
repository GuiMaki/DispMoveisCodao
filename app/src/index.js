const { response } = require("express");
const express = require("express");

const app = express();

app.get("/oi", (request, response) => {
    return response.send("Hello World!!!!");
});

app.get("/tchau", (request, response) => {
    return response.send("Bye World!!!!");
});

app.get("/secret", (request, response) => {
    return response.send(`
        <h1 style="font-size: 3rem; color: #ff6347; text-align: center;">Secreto shhhhhhh</h1>
        <p style="font-size: 1.5rem; color: black; margin: 5px 0; text-align: center;">Oi Roque</p>
        <p style="font-size: 1.5rem; color: blue; font-weight: bold; margin: 5px 0; text-align: center;">Bão?</p>
        <p style="font-size: 1.5rem; color: green; text-decoration: underline; margin: 5px 0; text-align: center;">Salveeeeeeeeeeeeeee</p>
    `); 
});

app.listen(3000);
