import { IRatingRequest } from "../../interface/IRatingInterface";
import { RatingRepositories } from "../../repositories/RatingRepositories";
import { getCustomRepository } from "typeorm";

class UpdateRatingService {
    async execute({ id, title, review, stars }: IRatingRequest) {
        const ratingRepository = getCustomRepository(RatingRepositories);
        const ratingAlreadyExists = await ratingRepository.findOne({ id });

        if (!ratingAlreadyExists) {
            throw new Error("Avaliação não encontrada");
        }

        let updated = false;

        if (title) {
            ratingAlreadyExists.title = title;
            updated = true;
        }

        if (review) {
            ratingAlreadyExists.review = review;
            updated = true;
        }

        if (stars) {
            ratingAlreadyExists.stars = stars;
            updated = true;
        }

        if (updated) {
            ratingAlreadyExists.updated_at = new Date();
        }

        return await ratingRepository.update(id, ratingAlreadyExists);
    }
}

export { UpdateRatingService };