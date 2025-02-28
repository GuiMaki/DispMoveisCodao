import { Request, Response } from "express";

class CreateSaleController {
    async handle(request: Request, response: Response){
        const {date, product, customer, ammount, total} = request.body;

        const sale = {
            date:date,
            product:product,
            customer:customer,
            ammount:ammount,
            total:total
        };

        response.json({message: "Registro incluído com sucesso"})
    }
}

export{CreateSaleController};