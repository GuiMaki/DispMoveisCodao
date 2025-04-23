import { Request, Response } from "express";
import { DeleteProductService } from "../../service/product/DeleteProductService";
import { SelectProductService } from "../../service/product/SelectProductService";

class DeleteProductController {
    async handle(request: Request, response: Response){
        const id = request.params.id;

        const getProductService = new SelectProductService();
        const product = await getProductService.execute(id);

        const deleteProductService = new DeleteProductService();

        const msg = await deleteProductService.execute(id);

        response.status(200).send(`Produto ${id} nome: ${product.name} excluido com sucesso!`)
    }
}

export{DeleteProductController};