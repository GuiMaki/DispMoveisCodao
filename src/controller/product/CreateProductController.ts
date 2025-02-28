import { Request, Response } from "express";

class CreateProductController {
    async handle(request: Request, response: Response){
        const {name, category, description, price} = request.body;

        const product = {
            name:name,
            category:category,
            description:description,
            price:price,
        };

        response.json({message: "Registro incluído com sucesso"})
    }
}

export{CreateProductController};