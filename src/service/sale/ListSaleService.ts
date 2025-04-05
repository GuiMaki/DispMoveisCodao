import { getCustomRepository } from "typeorm";
import { SaleRepositories } from "../../repositories/SaleRepositories";

class ListSaleService {
    async execute() {
        const saleRepository = getCustomRepository(SaleRepositories);

        const sale = await saleRepository.find()

        return sale.map(sale => ({
            id: sale.id,
            date: sale.date,
            total: sale.total,
            customer: {
                id: sale.customer.id,
                name: sale.customer.name,
                email: sale.customer.email,
                number: sale.customer.number,
            },
            saleProducts: sale.saleProduct.map(product => ({
                product_id: product.product_id,
                amount: product.amount,
            })),
            created_at: sale.created_at,
            updated_at: sale.updated_at,
        }))
    }
}

export { ListSaleService }