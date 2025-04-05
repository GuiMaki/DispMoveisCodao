import { getCustomRepository } from "typeorm";
import { SaleRepositories } from "../../repositories/SaleRepositories";
import { SaleProductRepositories } from "../../repositories/SalesProductRepositories";

class DeleteSaleService {
    async execute(id:string) {

        const saleRepository = getCustomRepository(SaleRepositories);
        const saleProductRepository = getCustomRepository(SaleProductRepositories);

        const saleAlreadyExists = await saleRepository.findOne({ id });

        if (!saleAlreadyExists){
            throw new Error("Venda não encontrada");
        }

        await saleProductRepository.delete({ sale_id: id });

        return await saleRepository.remove(saleAlreadyExists);
    }
}

export { DeleteSaleService }
