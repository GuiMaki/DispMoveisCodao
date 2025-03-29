import { ICustomerRequest } from "./ICustomerInterface"
import { IProductRequest } from "./IProductInterface"

interface ISaleRequest {
    id?: string,
    date: Date,
    product: IProductRequest[],
    customer: ICustomerRequest,
    amount: number,
    total: number
}

export { ISaleRequest }