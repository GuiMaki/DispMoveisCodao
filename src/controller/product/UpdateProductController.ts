import { Request, Response } from "express";
import { UpdateProductService } from "../../service/product/UpdateProductService";

class UpdateProductController {
    async handle(request: Request, response: Response){
        const {name, category, description, price, amount} = request.body;

        const id = request.params.id

        const updateProductService = new UpdateProductService();

        const product = await updateProductService.execute({
            id,
            name,
            category,
            description,
            price,
            amount
        });

        response.json({message: `Registro ${id} atualizado com sucesso`})
    }
}

export{UpdateProductController};