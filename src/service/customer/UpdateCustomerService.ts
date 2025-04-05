import { ICustomerRequest } from "../../interface/ICustomerInterface";
import { getCustomRepository } from "typeorm";
import { CustomerRepositories } from "../../repositories/CustomerRepositories";

class UpdateCustomerService {
    async execute({id, name, number, email, street, neighborhood, city, state}: ICustomerRequest){
        if (email) {
            throw new Error("O e-mail não pode ser alterado!");
        }
        
        const customerRepository = getCustomRepository(CustomerRepositories);
        const customerAlreadyExists = await customerRepository.findOne({ id, });

        if (!customerAlreadyExists) {
            throw new Error("Cliente não encontrado");
        }

        let updated = false

        if (name){
            customerAlreadyExists.name = name;
            updated = true;
        }

        if (number){
            customerAlreadyExists.number = number;
            updated = true;
        }

        if (email){
            customerAlreadyExists.email = email;
            updated = true;
        }

        if (street){
            customerAlreadyExists.street = street;
            updated = true;
        }

        if (neighborhood){
            customerAlreadyExists.neighborhood = neighborhood;
            updated = true;
        }

        if (city){
            customerAlreadyExists.city = city;
            updated = true;
        }

        if (state){
            customerAlreadyExists.state = state;
            updated = true;
        }

        if (updated){
            customerAlreadyExists.updated_at = new Date()
        }

        const customer = await customerRepository.update(id, customerAlreadyExists);

        return customer;
    }
}

export { UpdateCustomerService }