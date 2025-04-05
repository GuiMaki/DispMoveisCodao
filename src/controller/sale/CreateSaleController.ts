import { Request, Response } from "express";
import { CreateSaleService } from "../../service/sale/CreateSaleService";

class CreateSaleController {
    async handle(request: Request, response: Response){
        const {id, date, product, customer, amount, total} = request.body;

        const createSaleService = new CreateSaleService();

        const sale = await createSaleService.execute({
            date:date,
            product:product,
            customer:customer,
            amount:amount,
            total:total
        });

        response.status(200).send(`Venda registrada com sucesso!`);
    }
}

export{CreateSaleController};