import { IUserRequest } from "../../interface/IUserInterface";
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../../repositories/UserRepositories";
import { hash } from "bcryptjs";

class UpdateUserService {
    async execute({id, name, email, admin = false, password }: IUserRequest){
        if(email) {
            throw new Error("O e-mail não pode ser alterado!"); 
        }

        const userRepository = getCustomRepository(UserRepositories);
        const userAlreadyExists = await userRepository.findOne({ id, });

        if (!userAlreadyExists) {
            throw new Error("Usuário não encontrado");
        }

        let updated = false

        if (name){
            userAlreadyExists.name = name;
            updated = true;
        }
        
        if (admin){
            userAlreadyExists.admin = admin;
            updated = true;
        }

        if (password){
            const passwordHash = await hash(password, 8);
            userAlreadyExists.password = passwordHash
            updated = true;
        }
        
        if (updated){
            userAlreadyExists.updated_at = new Date()
        }

        return await userRepository.update(id, userAlreadyExists);
    }
}

export { UpdateUserService }