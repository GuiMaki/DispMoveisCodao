import { Request, Response } from "express";
import { ListRatingService } from "../../service/rating/ListRatingService";

class ListRatingController {
    async handle(request: Request, response: Response) {
        const listRatingService = new ListRatingService();

        const rating = await listRatingService.execute();

        response.json(rating);
    }
}

export { ListRatingController };