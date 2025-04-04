import { Request, Response } from "express";
import { DeleteUserService } from "../../service/user/DeleteUserService";

class DeleteUserController {
    async handle(request: Request, response: Response) {

        const id = request.params.id
        const name = request.params.name

        const deleteUserService = new DeleteUserService();

        const msg = await deleteUserService.execute(id);

        response.status(200).send(`Usuário ${id} nome: ${name} excluido com sucesso!`)
    }
}

export { DeleteUserController };