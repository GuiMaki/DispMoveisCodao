import { Request, Response } from "express";
import { UpdateCategoryService } from "../../service/category/UpdateCategoryService";

class UpdateCategoryController {
    async handle(request: Request, response: Response){
        const {name} = request.body;

        const id = request.params.id

        const updateCategoryService = new UpdateCategoryService();
        
        const product = await updateCategoryService.execute({
            id,
            name,
        });

        response.json({message: `Registro ${id} atualizado com sucesso`})
    }
}

export{UpdateCategoryController};