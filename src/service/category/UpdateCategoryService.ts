import { ICategoryRequest } from "../../interface/ICategoryInterface";
import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../../repositories/CategoryRepositories";

class UpdateCategoryService {
    async execute({ id, name }: ICategoryRequest) {
        const categoryRepository = getCustomRepository(CategoryRepositories);
        const categoryAlreadyExists = await categoryRepository.findOne({ id });

        if (!categoryAlreadyExists) {
            throw new Error("Categoria não encontrada");
        }

        let updated = false

        if (name) {
            categoryAlreadyExists.name = name;
            updated = true;
        }

        if (updated) {
            categoryAlreadyExists.updated_at = new Date();
        }

        return await categoryRepository.update(id, categoryAlreadyExists);
    }
}

export { UpdateCategoryService }