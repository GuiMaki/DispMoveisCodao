import { IUserRequest } from "../../interface/IUserInterface";

class CreateUserService {
    async execute({ name, email, admin = false, password }: IUserRequest) {
        if(!email) {
            throw new Error("E-mail inválido"); 
        }
        const user = {
            name: name,
            email: email,
            admin: false,
            password: password,
        };
        
        return user;
    }
}

export { CreateUserService } 