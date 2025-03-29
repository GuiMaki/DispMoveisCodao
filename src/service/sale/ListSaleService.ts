class ListSaleService {
    async execute() {
        const sale = [
            {
                date: new Date("2025-03-06"),
                product: [
                    {
                        name: "Bola de Vôlei",
                        category: "Brinquedos",
                        description: "Bola de tecido para modalidade vôlei",
                        price: "30.55",
                    },
                    {
                        name: "Bola de Tênis",
                        category: "Brinquedos",
                        description: "Bola de tecido para modalidade basquete",
                        price: "30.55",
                    }
                ],
                customer: "Willian Zhang",
                ammount: "20",
                total: "20000.00"
            },
            {
                date: new Date("2025-03-06"),
                product: [
                    {
                        name: "Bola de Vôlei",
                        category: "Brinquedos",
                        description: "Bola de tecido para modalidade vôlei",
                        price: "30.55",
                    },
                    {
                        name: "Bola de Tênis",
                        category: "Brinquedos",
                        description: "Bola de tecido para modalidade tênis",
                        price: "30.55",
                    }
                ],
                customer: "Roque Edu",
                ammount: "200",
                total: "30000.00"
            }
        ];

        return sale;
    }
}

export { ListSaleService }