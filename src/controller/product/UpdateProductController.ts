import { Request, Response } from "express";

class UpdateProductController {
    async handle(request: Request, response: Response){
        const {name, category, description, price} = request.body;

        const id = request.params.id

        const product = {
            id:id,
            name:name,
            category:category,
            description:description,
            price:price,
        };

        response.json({message: `Registro ${id} atualizado com sucesso`})
    }
}

export{UpdateProductController};