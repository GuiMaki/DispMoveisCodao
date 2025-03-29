import { ISaleRequest } from "../../interface/ISaleInterface";
import { SaleRepositories } from "../../repositories/SaleReposiotories";
import { getCustomRepository } from "typeorm";

class CreateSaleService {
    async execute({ date, product, customer, amount, total }: ISaleRequest) {
        if (!product || !customer || !amount || !total) {
            throw new Error("Venda inválida");
        }

        const saleRepository = getCustomRepository(SaleRepositories);
        
        const sale = saleRepository.create({ date});
    }
}

export { CreateSaleService } 