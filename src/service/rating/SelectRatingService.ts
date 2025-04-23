import { getCustomRepository } from "typeorm";
import { RatingRepositories } from "../../repositories/RatingRepositories";

class SelectRatingService {
    async execute(id: string) {
        const ratingRepository = getCustomRepository(RatingRepositories);

        const ratingAlreadyExists = await ratingRepository.findOne({ id, });

        if (!ratingAlreadyExists){
            throw new Error("Avaliação não encontrada");
        }

        return ratingAlreadyExists;
    }
}

export { SelectRatingService }