import { ICustomerRequest } from "../../interface/ICustomerInterface";

class CreateCustomerService {
    async execute({ name, number, email, street, neighborhood, city, state }: ICustomerRequest) {
        if (!email) {
            throw new Error("E-mail inválido");
        }
        const product = {
            name: name,
            number: number,
            email: email,
            street: street,
            neighborhood: neighborhood,
            city: city,
            state: state,
        };

        return product;
    }
}

export { CreateCustomerService } 