import {Request, Response} from 'express';
import { CreateRatingService } from '../../service/rating/CreateRatingService';

class CreateRatingController {
    async handle(request: Request, response: Response) {
        const { title, review, stars, customer, product } = request.body;

        const createRatingService = new CreateRatingService();

        const rating = await createRatingService.execute({
            title,
            review,
            stars,
            customer,
            product
        });

        return response.status(200).json(rating);
    }
}

export { CreateRatingController };