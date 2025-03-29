class ListProductService {
    async execute() {
        const product = [
            {
                name: "Bola de vôlei",
                category: "Brinquedo",
                description: "Bola de tecido para a modalidade vôlei",
                price: "20.55",
            },
            {
                name: "Bola de tênis",
                category: "Brinquedo",
                description: "Bola de tecido para a modalidade tênis",
                price: "20.55",
            },
            {
                name: "Bola de tênis",
                category: "Brinquedo",
                description: "Bola de tecido para a modalidade basquete",
                price: "20.55",
            },
        ];

        return product;
    }
}

export { ListProductService }