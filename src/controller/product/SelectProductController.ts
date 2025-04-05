import { Request, Response } from "express";
import { SelectProductService } from "../../service/product/SelectProductService";

class SelectProductController {
    async handle(request: Request, response: Response) {
        const id = request.params.id

        const selectProductService = new SelectProductService();

        const user = await selectProductService.execute(id);

        response.json(user)
    };
}

export { SelectProductController };
