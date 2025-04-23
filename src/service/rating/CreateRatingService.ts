import { IRatingRequest } from "../../interface/IRatingInterface";
import { RatingRepositories } from "../../repositories/RatingRepositories";
import { getCustomRepository } from "typeorm";
import { CustomerRepositories } from "../../repositories/CustomerRepositories";
import { ProductRepositories } from "../../repositories/ProductRepositories";

export class CreateRatingService {
    async execute({ title, review, stars, customer, product }: IRatingRequest) {

        if (!title || !review || !stars || !customer || !product) {
            throw new Error("Dados inválidos");
        }

        const ratingRepositories = getCustomRepository(RatingRepositories);
        const customerRepository = getCustomRepository(CustomerRepositories);
        const productRepository = getCustomRepository(ProductRepositories);

        const customerName = customer?.name; 
        const productName = product?.name;  

        if (!customerName || !productName) {
            throw new Error("Nome do cliente ou produto inválido");
        }

        const productAlreadyExists = await productRepository.findOne({ where: { name: productName } });
        const customerAlreadyExists = await customerRepository.findOne({ where: { name: customerName } });

        if (!productAlreadyExists) {
            throw new Error("Produto não encontrado");
        }

        if (!customerAlreadyExists) {
            throw new Error("Cliente não encontrado");
        }

        const rating = ratingRepositories.create({ title, review, stars, customer: customerAlreadyExists, product: productAlreadyExists });
        await ratingRepositories.save(rating);

        return rating;
    }
}