import { ICategoryRequest } from "../../interface/ICategoryInterface";

class CreateCategoryService {
    async execute({ name }: ICategoryRequest) {
        if (!name) {
            throw new Error("Nome inválido");
        }
        const category = {
            name: name,
        };

        return category;
    }
}

export { CreateCategoryService } 