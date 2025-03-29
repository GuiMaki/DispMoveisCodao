import { ISaleRequest } from "../../interface/ISaleInterface";

class UpdateSaleService {
    async execute({id, date, product, customer, amount, total }: ISaleRequest){
        if (!product) {
            throw new Error("Venda inválida");
        }
        const user = {
            id: id,
            date: date,
            product: product,
            customer: customer,
            amount: amount,
            total: total
        };
        return user;
    }
}

export { UpdateSaleService }