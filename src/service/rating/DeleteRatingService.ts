import { getCustomRepository } from "typeorm";
import { RatingRepositories } from "../../repositories/RatingRepositories";

class DeleteRatingService {
    async execute(id:string) {
        
        const ratingRepository = getCustomRepository(RatingRepositories);

        const ratingAlreadyExists = await ratingRepository.findOne({ id });

        if (!ratingAlreadyExists){
            throw new Error("Avaliação não encontrada");
        }

        return await ratingRepository.remove(ratingAlreadyExists);
    }
}

export { DeleteRatingService }