import { ISaleRequest } from "../../interface/ISaleInterface";
import { getCustomRepository } from "typeorm";
import { SaleRepositories } from "../../repositories/SaleRepositories";
import { CustomerRepositories } from "../../repositories/CustomerRepositories";

class UpdateSaleService {
    async execute({ id, date, customer, total }: ISaleRequest) {
        const saleRepository = getCustomRepository(SaleRepositories);
        const customerRepository = getCustomRepository(CustomerRepositories);

        const saleAlreadyExists = await saleRepository.findOne({
            where: { id },
            relations: ["saleProduct"], 
        });

        if (!saleAlreadyExists) {
            throw new Error("Venda não encontrada");
        }

        let updated = false;

        if (date) {
            saleAlreadyExists.date = date;
            updated = true;
        }

        if (customer) {
            const customerAlreadyExists = await customerRepository.findOne({
                name: customer.name,
                email: customer.email,
            });

            if (!customerAlreadyExists) {
                throw new Error("Cliente não encontrado");
            }

            saleAlreadyExists.customer = customerAlreadyExists;
            updated = true;
        }

        if (updated) {
            saleAlreadyExists.updated_at = new Date();
        }

        delete saleAlreadyExists.saleProduct;

        return await saleRepository.save(saleAlreadyExists);
    }
}

export { UpdateSaleService };
