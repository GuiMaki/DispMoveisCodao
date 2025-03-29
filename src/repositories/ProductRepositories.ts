import { EntityRepository, Repository } from "typeorm";
import { product } from "../entities/product"

@EntityRepository (product)
class ProductRepositories extends Repository <product> {}

export { ProductRepositories };