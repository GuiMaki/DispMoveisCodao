import { Request, Response } from "express";
import { DeleteCategoryService } from "../../service/category/DeleteCategoryService";
import { SelectCategoryService } from "../../service/category/SelectCategoryService";

class DeleteCategoryController {
    async handle(request: Request, response: Response){
        const id = request.params.id;

        const getCategoryService = new SelectCategoryService();
        const category = await getCategoryService.execute(id);        

        const deleteCategoryService = new DeleteCategoryService();

        const msg = await deleteCategoryService.execute(id);

        response.status(200).send(`Categoria ${id} nome: ${category.name} excluido com sucesso!`)
    }
}

export{DeleteCategoryController};