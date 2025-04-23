import { Request, Response } from "express";
import { DeleteUserService } from "../../service/user/DeleteUserService";
import { SelectUserService } from "../../service/user/SelectUserService";

class DeleteUserController {
    async handle(request: Request, response: Response) {
        const id = request.params.id;

        const getUserService = new SelectUserService();
        const user = await getUserService.execute(id);

        if (!user) {
            return response.status(404).send("Usuário não encontrado.");
        }

        const deleteUserService = new DeleteUserService();
        const msg = await deleteUserService.execute(id);

        response.status(200).send(`Usuário ${id} nome: ${user.name} excluído com sucesso!`);
    }
}

export { DeleteUserController };