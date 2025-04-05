import { getCustomRepository } from "typeorm";
import { CustomerRepositories } from "../../repositories/CustomerRepositories";

class SelectCustomerService {
    async execute(id: string) {
        const customerRepository = getCustomRepository(CustomerRepositories);

        const customerAlreadyExists = await customerRepository.findOne({ id, });

        if (!customerAlreadyExists){
            throw new Error("Cliente não encontrado");
        }

        return customerAlreadyExists;
    }
}

export { SelectCustomerService }