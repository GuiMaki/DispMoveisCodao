import { ICategoryRequest } from "./ICategoryInterface"

interface IProductRequest {
    id?: string,
    name: string,
    category: ICategoryRequest,
    description: string,
    price: number,
}

export { IProductRequest }