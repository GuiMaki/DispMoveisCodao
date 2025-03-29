import { IUserRequest } from "../../interface/IUserInterface";

class UpdateUserService {
    async execute({id, name, email, admin = false, password }: IUserRequest){
        if (!email) {
            throw new Error("E-mail incorreto");
        }
        const user = {
            id: id,
            name: name,
            email: email,
            admin: admin,
            password: password,
        };
        return user;
    }
}

export { UpdateUserService }