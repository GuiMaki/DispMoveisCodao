import { ICustomerRequest } from "./ICustomerInterface"
import { IProductRequest } from "./IProductInterface"

interface ISaleRequest {
    id?: string,
    date: Date,
    product: IProductRequest[],
    customer: ICustomerRequest,
    ammount: number,
    total: number
}

export { ISaleRequest }