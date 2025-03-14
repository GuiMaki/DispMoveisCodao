import { IAuthenticationRequest } from "../../interface/IAuthenticationInterface";
import { sign } from "jsonwebtoken";
import { hash, compare } from "bcryptjs";

class PostAuthenticationService {
    async execute({ email, password }: IAuthenticationRequest) {
        if (!email || !password) {
            throw new Error("Email ou senha inválidos");
        }
        
        const secret = await hash("fatec", 8);
        const passwordMatch = await compare(password, secret);
        if (!passwordMatch || email != "guimaki@gmail.com") {
            throw new Error("Credenciais inválidas");
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

export { PostAuthenticationService } 