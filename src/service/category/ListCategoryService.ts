class ListCategoryService {
    async execute() {
        const category = [
            {
                name: "Brinquedos",
            },
            {
                name: "Comida",
            },
        ];

        return category;
    }
}

export { ListCategoryService }