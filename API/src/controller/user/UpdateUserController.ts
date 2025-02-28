import { Request, Response } from "express";

class UpdateUserController {
    async handle(request: Request, response: Response){
        const {name, email, admin, password} = request.body;

        const id = request.params.id

        const user = {
            id:id,
            name:name,
            email: email,
            admin:admin,
            password:password
        };

        response.json({message: `Registro ${id} atualizado com sucesso`})
    }
}

export{UpdateUserController};