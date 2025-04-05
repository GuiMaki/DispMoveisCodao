import { Request, Response } from 'express';
import { SelectSaleService } from '../../service/sale/SelectSaleService';

class SelectSaleController {
    async handle(request: Request, response: Response) {
        const id = request.params.id

        const selectSaleService = new SelectSaleService();

        const sale = await selectSaleService.execute(id);

        return response.json(sale);
    };
}

export { SelectSaleController };