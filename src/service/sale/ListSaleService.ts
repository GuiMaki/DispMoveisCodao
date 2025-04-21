import { getCustomRepository } from "typeorm";
import { SaleRepositories } from "../../repositories/SaleRepositories";

class ListSaleService {
    async execute() {
        const saleRepository = getCustomRepository(SaleRepositories);

        const sales = await saleRepository.find({ relations: ["customer", "saleProduct", "saleProduct.product"] });

        return sales.map(sale => ({
            id: sale.id,
            date: sale.date,
            total: sale.total,
            customer: {
                id: sale.customer.id,
                name: sale.customer.name,
                email: sale.customer.email,
                number: sale.customer.number,
            },
            saleProducts: sale.saleProduct.map(saleProduct => ({
                product: {
                    id: saleProduct.product.id,
                    name: saleProduct.product.name,
                },
                amount: saleProduct.amount,
            })),
            created_at: sale.created_at,
            updated_at: sale.updated_at,
        }));
    }
}

export { ListSaleService };