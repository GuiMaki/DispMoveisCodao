import { ISaleRequest } from "../../interface/ISaleInterface";

class CreateSaleService {
    async execute({ date, product, customer, ammount, total }: ISaleRequest) {
        if (!product) {
            throw new Error("Venda inválida");
        }
        const sale = {
            date: date,
            product: product,
            customer: customer,
            ammount: ammount,
            total: total
        };

        return sale;
    }
}

export { CreateSaleService } 