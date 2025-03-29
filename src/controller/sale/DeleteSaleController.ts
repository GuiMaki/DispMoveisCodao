import { Request, Response } from "express";
import { DeleteUserService } from "../../service/user/DeleteUserService";

class DeleteSaleController {
    async handle(request: Request, response: Response){
      
        const id = request.params.id

        const deleteSaleService = new DeleteUserService();

        const msg = await deleteSaleService.execute(id);

        response.json({msg})
    }
}

export{DeleteSaleController};