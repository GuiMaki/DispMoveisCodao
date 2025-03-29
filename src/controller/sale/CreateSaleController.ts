import { Request, Response } from "express";
import { CreateSaleService } from "../../service/sale/CreateSaleService";

class CreateSaleController {
    async handle(request: Request, response: Response){
        const {date, product, customer, ammount, total} = request.body;

        const createSaleService = new CreateSaleService();

        const sale = await createSaleService.execute({
            date:date,
            product:product,
            customer:customer,
            ammount:ammount,
            total:total
        });

        response.json({message: "Registro incluído com sucesso"})
    }
}

export{CreateSaleController};