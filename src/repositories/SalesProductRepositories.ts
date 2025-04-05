import { EntityRepository, Repository } from "typeorm";
import { saleProduct } from "../entities/saleProduct";

@EntityRepository(saleProduct)
class SaleProductRepositories extends Repository<saleProduct> {}

export { SaleProductRepositories };