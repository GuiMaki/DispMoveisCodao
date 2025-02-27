import { Request, Response } from "express";

class CreateProductController {
    async handle(request: Request, response: Response){
        const {name, description, price, amount} = request.body;

        const product = {
            name:name,
            description:description,
            price:price,
            amount:amount
        };

        response.json({message: `Registro incluído com sucesso ${product.name}`})
    }
}

export{CreateProductController};