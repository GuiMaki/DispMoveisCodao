import { ISaleRequest } from "../../interface/ISaleInterface";
import { getCustomRepository } from "typeorm";
import { ProductRepositories } from "../../repositories/ProductRepositories";
import { SaleRepositories } from "../../repositories/SaleRepositories";
import { CustomerRepositories } from "../../repositories/CustomerRepositories";
import { SaleProductRepositories } from "../../repositories/SalesProductRepositories";

class CreateSaleService {
    async execute({ date, product, customer }: ISaleRequest) {

        if (!date || !product || !customer ) {
            throw new Error("Dados inválidos");
        }

        const saleRepositories = getCustomRepository(SaleRepositories);
        const productRepository = getCustomRepository(ProductRepositories);
        const salesProductRepository = getCustomRepository(SaleProductRepositories);
        const customerRepository = getCustomRepository(CustomerRepositories);

        const productAlreadyExists = await Promise.all(
            product.map(async (prod) => await productRepository.findOne({ name: prod.name }))
        );
        const customerAlreadyExists = await customerRepository.findOne({ name: customer.name });

        if (productAlreadyExists.some((prod) => !prod)) {
            throw new Error("Um ou mais produtos não foram encontrados");
        }
        
        if (!customerAlreadyExists) {
            throw new Error("Cliente não encontrado");
        }

        let total = 0;

        for (const [index, prod] of product.entries()) {
            const productFound = productAlreadyExists[index];
            if (productFound) {
                total += productFound.price * prod.amount;
            }
        }
        const sale = saleRepositories.create({ date, customer: customerAlreadyExists, total });
        
        await saleRepositories.save(sale);

        for (const [index, prod] of product.entries()) {
            const salesProduct = salesProductRepository.create({ sale, product: productAlreadyExists[index], amount: prod.amount});
            
            await salesProductRepository.save(salesProduct);
        }

        return sale;
    }
}

export { CreateSaleService };