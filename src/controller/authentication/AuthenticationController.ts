import { Request, Response } from "express";
import { AuthenticationService } from "../../service/authentication/AuthenticationService";

class AuthenticationController {
    async handle(request: Request, response: Response) {
        const { email, password } = request.body;

            const postAuthenticationService = new AuthenticationService();

            const authentication = await postAuthenticationService.execute({
                email,
                password,
            });

            response.json(authentication)
    }
}

export { AuthenticationController };