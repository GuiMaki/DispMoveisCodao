import { Request, Response } from "express";
import { DeleteSaleService } from "../../service/sale/DeleteSaleService";

class DeleteSaleController {
    async handle(request: Request, response: Response){
      
        const id = request.params.id

        const deleteSaleService = new DeleteSaleService();

        const msg = await deleteSaleService.execute(id);

        response.status(200).send(`Venda ${id} excluido com sucesso!`)
    }
}

export{DeleteSaleController};