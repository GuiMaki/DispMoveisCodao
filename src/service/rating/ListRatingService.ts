import { getCustomRepository } from "typeorm";
import { RatingRepositories } from "../../repositories/RatingRepositories";

class ListRatingService {
    async execute() {
        const ratingRepository = getCustomRepository(RatingRepositories);

        const rating = await ratingRepository.find({
            relations: ["product", "customer"]
        });

        return rating;
    }
}

export { ListRatingService };