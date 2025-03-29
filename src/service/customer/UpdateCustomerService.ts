import { ICustomerRequest } from "../../interface/ICustomerInterface";

class UpdateCustomerService {
    async execute({id, name, number, email, street, neighborhood, city, state}: ICustomerRequest){
        if (!name) {
            throw new Error("Cliente inválido");
        }
        const customer = {
            id:id,
            name: name,
            number: number,
            email: email,
            street: street,
            neighborhood: neighborhood,
            city: city,
            state: state,
        };

        return customer;
    }
}

export { UpdateCustomerService }