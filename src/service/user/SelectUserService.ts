import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../../repositories/UserRepositories";

class SelectUserService {
    async execute(id: string) {
        const userRepository = getCustomRepository(UserRepositories);

        const userAlreadyExists = await userRepository.findOne({ id, });

        if (!userAlreadyExists){
            throw new Error("Usuário não encontrado");
        }

        return userAlreadyExists;
    }
}

export { SelectUserService }