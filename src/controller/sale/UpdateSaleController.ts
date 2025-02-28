import { Request, Response } from "express";

class UpdateSaleController {
    async handle(request: Request, response: Response){
        const {date, product, customer, ammount, total} = request.body;

        const id = request.params.id

        const sale = {
            id:id,
            date:date,
            product:product,
            customer:customer,
            ammount:ammount,
            total:total
        };

        response.json({message: `Registro ${id} atualizado com sucesso`})
    }
}

export{UpdateSaleController};