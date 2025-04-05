import { Request, Response } from "express";
import { SelectCategoryService } from "../../service/category/SelectCategoryService";

class SelectCategoryController {
    async handle(request: Request, response: Response) {
        const id = request.params.id

        const selectCategoryService = new SelectCategoryService();

        const category = await selectCategoryService.execute(id);

        response.json(category)
    };
}

export { SelectCategoryController };