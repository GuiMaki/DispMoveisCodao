import { Request, Response } from "express";
import { UpdateRatingService } from "../../service/rating/UpdateRatingService";

class UpdateRatingController {
    async handle(request: Request, response: Response) {
        const { title, review, stars, customer, product } = request.body; // Inclua customer e product

        const id = request.params.id;

        const updateRatingService = new UpdateRatingService();

        const rating = await updateRatingService.execute({
            id,
            title,
            review,
            stars,
            customer, 
            product   
        });

        return response.json({ message: `Registro ${id} atualizado com sucesso` });
    }
}

export { UpdateRatingController };