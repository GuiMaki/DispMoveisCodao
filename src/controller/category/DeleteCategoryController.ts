import { Request, Response } from "express";

class DeleteCategoryController {
    async handle(request: Request, response: Response){
      
        const id = request.params.id

        response.json({message: `Registro ${id} deletado com sucesso`})
    }
}

export{DeleteCategoryController};