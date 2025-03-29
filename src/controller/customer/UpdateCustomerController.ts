import { Request, Response } from "express";
import { UpdateCustomerService } from "../../service/customer/UpdateCustomerService";

class UpdateCustomerController {
    async handle(request: Request, response: Response){
        const {name, number, email, street, neighborhood, city, state} = request.body;

        const id = request.params.id

        const updateCustomerService = new UpdateCustomerService();

        const product = await updateCustomerService.execute({
            id,
            name,
            number,
            email,
            street,
            neighborhood,
            city,
            state
        });

        response.json({message: `Registro ${id} atualizado com sucesso`})
    }
}

export{UpdateCustomerController};