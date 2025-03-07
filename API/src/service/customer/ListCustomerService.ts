class ListCustomerService {
    async execute() {
        const customer = [
            {
                name: "name",
                number: "(11) 11111-1111",
                email: "email@email.com",
                street: "street",
                neighborhood: "neighborhood",
                city: "city",
                state: "SP",
            },
            {
                name: "Eduardo Roque Serapilha de Souza",
                number: "(11) 97277-5377",
                email: "edurss1000@gmail.com",
                street: "Rua do Roque",
                neighborhood: "Bairro do Roque",
                city: "Cidade do Roque",
                state: "Estado do Roque",
            },
        ];

        return customer;
    }
}

export { ListCustomerService }