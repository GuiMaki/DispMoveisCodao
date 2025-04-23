import { Request, Response, NextFunction } from "express";
import { DeleteCustomerService } from "../../service/customer/DeleteCustomerService";
import { SelectCustomerService } from "../../service/customer/SelectCustomerService";

class DeleteCustomerController {
    async handle(request: Request, response: Response, next: NextFunction) {
        try {
            const id = request.params.id;

            const getCustomerService = new SelectCustomerService();
            const customer = await getCustomerService.execute(id);

            if (!customer) {
                return response.status(404).send("Cliente não encontrado.");
            }

            const deleteCustomerService = new DeleteCustomerService();
            await deleteCustomerService.execute(id);

            response.status(200).send(`Cliente ${id} nome: ${customer.name} excluido com sucesso!`);
        } catch (error) {
            next(error); 
        }
    }
}

export { DeleteCustomerController };