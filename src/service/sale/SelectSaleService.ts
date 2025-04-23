import { getCustomRepository } from "typeorm";
import { SaleRepositories } from "../../repositories/SaleRepositories";

class SelectSaleService {
    async execute(id: string) {
        const saleRepository = getCustomRepository(SaleRepositories);

        const sale = await saleRepository.createQueryBuilder("sale")
            .leftJoinAndSelect("sale.customer", "customer")
            .leftJoinAndSelect("sale.saleProduct", "saleProduct")
            .leftJoinAndSelect("saleProduct.product", "product")
            .where("sale.id = :id", { id })
            .getOne();

        if (!sale) {
            throw new Error("Venda não encontrada");
        }

        return {
            id: sale.id,
            date: sale.date,
            total: sale.total,
            customer: sale.customer ? { 
                id: sale.customer.id,
                name: sale.customer.name || "N/A",
                email: sale.customer.email || "N/A",
                number: sale.customer.number || "N/A",
            } : { id: null, name: "N/A", email: "N/A", number: "N/A" },
            saleProducts: sale.saleProduct.map(saleProduct => ({
                product: saleProduct.product ? { 
                    id: saleProduct.product.id,
                    name: saleProduct.product.name || "N/A",
                } : { 
                    id: null, 
                    name: "Produto não encontrado" 
                },
                amount: saleProduct.amount || 0,
            })),
            created_at: sale.created_at,
            updated_at: sale.updated_at,
        };
    }
}

export { SelectSaleService };