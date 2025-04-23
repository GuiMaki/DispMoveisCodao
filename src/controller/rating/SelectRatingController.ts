import { Request, Response } from "express";
import { SelectRatingService } from "../../service/rating/SelectRatingService";

class SelectRatingController {
    async handle(request: Request, response: Response) {
        const id = request.params.id

        const selectRatingService = new SelectRatingService();

        const rating = await selectRatingService.execute(id);

        response.json(rating)
    };
}

export { SelectRatingController };