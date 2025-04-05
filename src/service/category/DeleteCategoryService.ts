import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../../repositories/CategoryRepositories";

class DeleteCategoryService {
    async execute(id:string) {

        const productRepository = getCustomRepository(CategoryRepositories);

        const categoryAlreadyExists = await productRepository.findOne({ id });

        if (!categoryAlreadyExists){
            throw new Error("Categoria não encontrada");
        }

        return await productRepository.remove(categoryAlreadyExists);
    }
}

export { DeleteCategoryService }
