import { EntityRepository, Repository } from "typeorm";
import { user } from "../entities/user"

@EntityRepository (user)
class UserRepositories extends Repository <user> {}

export { UserRepositories };