import { Request, Response } from "express";
import { DeleteCategoryService } from "../../service/category/DeleteCategoryService";

class DeleteCategoryController {
    async handle(request: Request, response: Response){
      
        const id = request.params.id
        const name = request.params.name

        const deleteCategoryService = new DeleteCategoryService();

        const msg = await deleteCategoryService.execute(id);

        response.status(200).send(`Categoria ${id} nome: ${name} excluido com sucesso!`)
    }
}

export{DeleteCategoryController};