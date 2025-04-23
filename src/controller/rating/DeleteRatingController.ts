import { Request, Response } from "express";
import { DeleteRatingService } from "../../service/rating/DeleteRatingService";
import { SelectRatingService } from "../../service/rating/SelectRatingService";

class DeleteRatingController {
    async handle(request: Request, response: Response) {
        const id = request.params.id;

        const getRatingService = new SelectRatingService();
        const rating = await getRatingService.execute(id);

        const deleteRatingService = new DeleteRatingService();

        const msg = await deleteRatingService.execute(id);

        response.status(200).send(`Avaliação ${id} título: "${rating.title}" excluida com sucesso!`)
    }
}

export { DeleteRatingController };