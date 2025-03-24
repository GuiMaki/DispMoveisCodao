import { Request, Response } from "express";
import { PostAuthenticationService } from "../../service/authentication/PostAuthenticationService";

class PostAuthenticationController {
    async handle(request: Request, response: Response) {
        const { email, password } = request.body;

            const postAuthenticationService = new PostAuthenticationService();

            const authentication = await postAuthenticationService.execute({
                email,
                password,
            });

            response.json(authentication)
    }
}

export { PostAuthenticationController };