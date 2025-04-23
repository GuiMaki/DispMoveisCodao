interface IRatingRequest {
    id?: string;
    title: string;
    review: string;
    stars: number;
    customer: { name: string }; 
    product: { name: string };  
}

export { IRatingRequest };