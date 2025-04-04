import { IProductRequest } from "../../interface/IProductInterface";
import { ProductRepositories } from "../../repositories/ProductRepositories";
import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../../repositories/CategoryRepositories";

class CreateProductService {
    async execute({ name, category, description, price }: IProductRequest) {
        if (!name || !category || !price) {
            throw new Error("Dados inválidos");
        }

        const categoryRepository = getCustomRepository(CategoryRepositories);
        const productRepository = getCustomRepository(ProductRepositories);
        const productAlreadyExists = await productRepository.findOne({ name });
        const categoryAlreadyExists = await categoryRepository.findOne({ name: category.name })

        if (productAlreadyExists){
            throw new Error("Produto já cadastrado");
        }

        if (!categoryAlreadyExists){
            throw new Error("Categoria não encontrada")
        }

        categoryAlreadyExists.name = category.name;

        const product = productRepository.create({ name, category: categoryAlreadyExists, description, price})

        await productRepository.save(product)

        return product;
    }
}

export { CreateProductService } 