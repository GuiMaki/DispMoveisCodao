import { Request, Response } from "express";
import { CreateCategoryService } from "../../service/category/CreateCategoryService";

class CreateCategoryController {
    async handle(request: Request, response: Response){
        const {name} = request.body;

        const createCategoryService = new CreateCategoryService();

        const customer = await createCategoryService.execute({
            name,
        });

        response.json({message: "Registro incluído com sucesso"})
    }
}

export{CreateCategoryController};