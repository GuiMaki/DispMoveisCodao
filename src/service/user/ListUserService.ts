import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../../repositories/UserRepositories";

class ListUserService {
    async execute() {
        const userRepositories = getCustomRepository(UserRepositories);

        const user = await userRepositories.find()

        return user;
    }
}

export { ListUserService }