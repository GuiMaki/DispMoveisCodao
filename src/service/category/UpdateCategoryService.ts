import { ICategoryRequest } from "../../interface/ICategoryInterface";

class UpdateCategoryService {
    async execute({ id, name }: ICategoryRequest) {
        if (!name) {
            throw new Error("Nome inválido");
        }
        const category = {
            id: id,
            name: name,
        };

        return category;
    }
}

export { UpdateCategoryService }