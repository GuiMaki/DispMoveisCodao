class ListUserService {
    async execute() {
        const user = [
            {
                name: "Roque",
                email: "edurss1000@gmail.com",
                password: "1234"
            },
            {
                name: "Willian",
                email: "willzang@gmail.com",
                password: "4321"
            },
            {
                name: "Doni",
                email: "electrinho@gmail.com",
                password: "Mar1oProp2024"
            },
        ];

        return user;
    }
}

export { ListUserService }