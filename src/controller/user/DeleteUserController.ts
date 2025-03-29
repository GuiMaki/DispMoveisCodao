import { Request, Response } from "express";
import { DeleteUserService } from "../../service/user/DeleteUserService";

class DeleteUserController {
    async handle(request: Request, response: Response) {

        const id = request.params.id

        const deleteUserService = new DeleteUserService();

        const msg = await deleteUserService.execute(id);

        response.json(msg)
    }
}

export { DeleteUserController };