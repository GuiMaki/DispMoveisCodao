interface IRatingRequest {
    id?: string;
    title: string;
    review: string;
    stars: number;
    customer: string;
    product: string;
}

export { IRatingRequest };