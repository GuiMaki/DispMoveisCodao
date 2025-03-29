import { Request, Response } from "express";
import { DeleteCustomerService } from "../../service/customer/DeleteCustomerService";

class DeleteCustomerController {
    async handle(request: Request, response: Response){
      
        const id = request.params.id

        const deleteCustomerService = new DeleteCustomerService();

        const msg = await deleteCustomerService.execute(id);

        response.json(msg)
    }
}

export{DeleteCustomerController};