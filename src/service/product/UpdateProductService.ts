import { IProductRequest } from "../../interface/IProductInterface";

class UpdateProductService {
    async execute({id, name, category, description, price}: IProductRequest){
        if (!name) {
            throw new Error("Nome inválido");
        }
        const product = {
            id: id,
            name: name,
            category: category,
            description: description,
            price: price,
        };
        return product;
    }
}

export { UpdateProductService }