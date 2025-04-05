import { getCustomRepository } from "typeorm";
import { ProductRepositories } from "../../repositories/ProductRepositories";

class SelectProductService {
    async execute(id: string) {
        const productRepository = getCustomRepository(ProductRepositories);

        const productAlreadyExists = await productRepository.findOne({ id, });

        if (!productAlreadyExists){
            throw new Error("Usuário não encontrado");
        }

        return productAlreadyExists;
    }
}

export { SelectProductService }