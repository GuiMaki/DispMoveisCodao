import { IProductRequest } from "../../interface/IProductInterface";

class CreateProductService {
    async execute({ name, category, description, price }: IProductRequest) {
        if (!name) {
            throw new Error("Nome inválido");
        }
        const product = {
            name: name,
            category: category,
            description: description,
            price: price,
        };

        return product;
    }
}

export { CreateProductService } 