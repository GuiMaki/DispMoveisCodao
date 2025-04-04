import { IProductRequest } from "../../interface/IProductInterface";
import { getCustomRepository } from "typeorm";
import { ProductRepositories } from "../../repositories/ProductRepositories";
import { CategoryRepositories } from "../../repositories/CategoryRepositories";

class UpdateProductService {
    async execute({id, name, category, description, price}: IProductRequest){
        const productRepository = getCustomRepository(ProductRepositories);
        const categoryRepository = getCustomRepository(CategoryRepositories);
        const productAlreadyExists = await productRepository.findOne({ id });

        if (!productAlreadyExists){
            throw new Error("Produto não encontrado");
        }

        let updated = false

        if (name){
            productAlreadyExists.name = name;
            updated = true;
        }

        if (category){
            const categoryAlreadyExists = await categoryRepository.findOne({ name: category.name })

            if (!categoryAlreadyExists){
                throw new Error("Categoria não encontrada")
            }

            productAlreadyExists.category = categoryAlreadyExists;
            updated = true;
        }

        if (description){
            productAlreadyExists.description = description;
            updated = true;
        }

        if (price){
            productAlreadyExists.price = price;
            updated = true;
        }

        if (updated){
            productAlreadyExists.updated_at = new Date();
        }

        return await productRepository.update(id, productAlreadyExists);
    }
}

export { UpdateProductService }