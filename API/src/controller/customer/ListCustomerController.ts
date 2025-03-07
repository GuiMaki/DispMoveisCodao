import { Request, Response } from "express";
import { ListCustomerService } from "../../service/customer/ListCustomerService";

class ListCustomerController {
    async handle(request: Request, response: Response){

        const listCustomerService = new ListCustomerService();

        const customer = await listCustomerService.execute();

        response.json(customer)
    }
}

export{ListCustomerController};
