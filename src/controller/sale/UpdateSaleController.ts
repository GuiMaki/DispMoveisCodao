import { Request, Response } from "express";
import { UpdateSaleService } from "../../service/sale/UpdateSaleService";

class UpdateSaleController {
    async handle(request: Request, response: Response){
        const {date, product, customer, amount, total} = request.body;

        const id = request.params.id

        const updateSaleService = new UpdateSaleService();

        const sale = await updateSaleService.execute({
            id,
            date,
            product,
            customer,
            amount,
            total,
        });

        response.json({message: `Registro ${id} atualizado com sucesso`})
    }
}

export{UpdateSaleController}; 