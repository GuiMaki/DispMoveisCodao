import { Request, Response } from 'express';
import { SelectCustomerService } from '../../service/customer/SelectCustomerService';

class SelectCustomerController {
    async handle(request: Request, response: Response) {
        const id = request.params.id

        const selectCustomerService = new SelectCustomerService();

        const customer = await selectCustomerService.execute(id);

        response.json(customer)
    };
}

export { SelectCustomerController };