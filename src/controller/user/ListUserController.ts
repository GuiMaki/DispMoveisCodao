import { Request, Response } from "express";
import { ListUserService } from "../../service/user/ListUserService";

class ListUserController {
    async handle(request: Request, response: Response) {

        const listUserService = new ListUserService();

        const user = await listUserService.execute();

        response.json(user)
    };
}

export { ListUserController };
