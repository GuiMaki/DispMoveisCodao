import { EntityRepository, Repository } from "typeorm";
import { sale } from "../entities/sale"

@EntityRepository (sale)
class SaleRepositories extends Repository <sale> {}

export { SaleRepositories };