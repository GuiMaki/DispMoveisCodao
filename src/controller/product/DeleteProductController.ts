import { Request, Response } from "express";
import { DeleteProductService } from "../../service/product/DeleteProductService";

class DeleteProductController {
    async handle(request: Request, response: Response){
      
        const id = request.params.id
        const name = request.params.name

        const deleteProductService = new DeleteProductService();

        const msg = await deleteProductService.execute(id);

        response.status(200).send(`Produto ${id} nome: ${name} excluido com sucesso!`)
    }
}

export{DeleteProductController};