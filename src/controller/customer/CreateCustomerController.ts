import { Request, Response } from "express";
import { CreateCustomerService } from "../../service/customer/CreateCustomerService";

class CreateCustomerController {
    async handle(request: Request, response: Response){
        const {name, number, email, street, neighborhood, city, state} = request.body;

        const createCustomerService = new CreateCustomerService();

        const customer = await createCustomerService.execute({
            name,
            number,
            email,
            street,
            neighborhood,
            city,
            state
        });

        response.status(200).send( `Cliente ${name} incluído com sucesso`)
    }
}

export{CreateCustomerController};