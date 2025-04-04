import { IAuthenticationRequest } from "../../interface/IAuthenticationInterface";
import { sign } from "jsonwebtoken";
import { hash, compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../../repositories/UserRepositories";

class AuthenticationService {
    async execute({ email, password }: IAuthenticationRequest) {
        if (!email || !password) {
            throw new Error("Email ou senha inválidos");
        }

        const userRepositories = getCustomRepository(UserRepositories);
        const user = await userRepositories.findOne({ email });

        if (!user){
            throw new Error("Usuário não encontrado");
        }

        const passwordMatch = await compare(password, user?.password);
        
        if (!passwordMatch){
            throw new Error("Credenciais incorretas!");
        }
        
        const authentication = sign(
            {
                email: email,
            },
            "mobilefatec",
            {
                subject: "other",
                expiresIn: "1d",
            }
        )

        return authentication;
    }
}

export { AuthenticationService } 