import { EntityRepository, Repository } from "typeorm";
import { category } from "../entities/category"

@EntityRepository (category)
class CategoryRepositories extends Repository <category> {}

export { CategoryRepositories };