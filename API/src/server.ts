import express, { NextFunction, Response, Request } from "express";
import "express-async-errors"
import "reflect-metadata"
import "./database"
import { router } from "./routes"

const app = express ();

app.use(express.json());

app.use(router);

app.listen(3000, () => {
    console.log("Start at =>3000");
});

app.use(
    (error:Error, request:Request, response:Response, next:NextFunction) => {
        if (error instanceof Error) {
            response.status(400).send(error.message)
        } else {
            response.status(500).send("Erro interno")
        }
    }
)
