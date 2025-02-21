import { Request, Response } from "express";

class CreateUserController {
    async handle(request: Request, response: Response){
        const {name, email, admin, password} = request.body;

        const user = {
            name:name,
            email: email,
            admin:admin,
            password:password
        };

        response.json({message: `Registro incluído com sucesso ${user.name}`})
    }
}

export{CreateUserController};