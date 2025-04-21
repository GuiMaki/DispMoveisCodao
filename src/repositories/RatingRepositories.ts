import { EntityRepository, Repository } from "typeorm";
import { rating } from "../entities/rating";

@EntityRepository(rating)
export class RatingRepositories extends Repository<rating> {
}
