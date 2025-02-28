import { Request, Response } from "express";

class UpdateCategoryController {
    async handle(request: Request, response: Response){
        const {name} = request.body;

        const id = request.params.id

        const product = {
            id:id,
            name:name,
        };

        response.json({message: `Registro ${id} atualizado com sucesso`})
    }
}

export{UpdateCategoryController};