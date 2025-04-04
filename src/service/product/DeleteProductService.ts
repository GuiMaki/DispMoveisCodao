import { getCustomRepository } from "typeorm";
import { ProductRepositories } from "../../repositories/ProductRepositories";

class DeleteProductService {
    async execute(id:string) {
        
        const productRepository = getCustomRepository(ProductRepositories);

        const productAlreadyExists = await productRepository.findOne({ id });

        if (!productAlreadyExists){
            throw new Error("Produto não encontrado");
        }

        return await productRepository.remove(productAlreadyExists);
    }
}

export { DeleteProductService }
