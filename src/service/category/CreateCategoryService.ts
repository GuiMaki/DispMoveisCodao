import { ICategoryRequest } from "../../interface/ICategoryInterface";
import { CategoryRepositories } from "../../repositories/CategoryRepositories";
import { getCustomRepository } from "typeorm";

class CreateCategoryService {
    async execute({ name }: ICategoryRequest) {
        if (!name) {
            throw new Error("Nome inválido");
        }

        const categoryRepository = getCustomRepository(CategoryRepositories);
        const categoryAlreadyExists = await categoryRepository.findOne({ name });

        if (categoryAlreadyExists){
            throw new Error("Categoria já cadastrada")
        }

        const category = categoryRepository.create({ name })

        await categoryRepository.save(category)

        return category;
    }
}

export { CreateCategoryService } 