import { getCustomRepository } from "typeorm";
import { CustomerRepositories } from "../../repositories/CustomerRepositories";

class ListCustomerService {
    async execute() {
        const customerRepositories = getCustomRepository(CustomerRepositories);

        const customer = await customerRepositories.find()

        return customer;
    }
}

export { ListCustomerService }