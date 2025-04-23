import { getCustomRepository } from "typeorm";
import { RatingRepositories } from "../../repositories/RatingRepositories";

class ListRatingService {
    async execute() {
        const ratingRepository = getCustomRepository(RatingRepositories);

        const rating = await ratingRepository.find()

        return rating;
    }
}

export { ListRatingService };