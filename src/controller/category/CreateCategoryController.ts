import { Request, Response } from "express";

class CreateCategoryController {
    async handle(request: Request, response: Response){
        const {name} = request.body;

        const customer = {
            name:name,
        };

        response.json({message: "Registro incluído com sucesso"})
    }
}

export{CreateCategoryController};