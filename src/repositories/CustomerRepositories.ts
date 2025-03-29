import { EntityRepository, Repository } from "typeorm";
import { customer } from "../entities/customer"

@EntityRepository (customer)
class CustomerRepositories extends Repository <customer> {}

export { CustomerRepositories };