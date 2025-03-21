import { Request, Response } from "express";
import { DeleteProductService } from "../../service/product/DeleteProductService";

class DeleteProductController {
    async handle(request: Request, response: Response){
      
        const id = request.params.id

        const deleteProductService = new DeleteProductService();

        const msg = await deleteProductService.execute(id);

        response.json(msg)
    }
}

export{DeleteProductController};