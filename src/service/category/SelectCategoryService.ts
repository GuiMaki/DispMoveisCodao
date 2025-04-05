import { getCustomRepository } from "typeorm";
import { CategoryRepositories } from "../../repositories/CategoryRepositories";

class SelectCategoryService {
    async execute(id: string) {
        const categoryRepository = getCustomRepository(CategoryRepositories);

        const categoryAlreadyExists = await categoryRepository.findOne({ id, });

        if (!categoryAlreadyExists){
            throw new Error("Usuário não encontrado");
        }

        return categoryAlreadyExists;
    }
}

export { SelectCategoryService }