import { ICustomerRequest } from "../../interface/ICustomerInterface";
import { CustomerRepositories } from "../../repositories/CustomerRepositories";
import { getCustomRepository } from "typeorm";

class CreateCustomerService {
    async execute({ name, number, email, street, neighborhood, city, state }: ICustomerRequest) {
        if (!name || !number || !email || !street || !neighborhood || !city || !state) {
            throw new Error("Dados inválidos!");
        }
        
        const customerRepository = getCustomRepository(CustomerRepositories);
        const customerAlreadyExists = await customerRepository.findOne({ email });

        if (customerAlreadyExists) {
            throw new Error("E-mail já cadastrado!");
        }

        const customer = customerRepository.create({ name, number, email, street, neighborhood, city, state });

        await customerRepository.save(customer);

        return customer;
    }
}

export { CreateCustomerService } 