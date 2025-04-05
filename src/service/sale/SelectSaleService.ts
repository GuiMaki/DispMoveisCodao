import { getCustomRepository } from "typeorm";
import { SaleRepositories } from "../../repositories/SaleRepositories";

class SelectSaleService {
    async execute(id: string) {
        const saleRepository = getCustomRepository(SaleRepositories);

        const saleAlreadyExists = await saleRepository.findOne({ id, });

        if (!saleAlreadyExists){
            throw new Error("Venda não encontrada");
        }

        return saleAlreadyExists;
    }
}

export { SelectSaleService };