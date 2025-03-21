class DeleteSaleService {
    async execute(id:string) {

        console.log(id);

        const msg = {
            message: `Venda ${id} removido com sucesso`
        }

        return msg
    }
}

export { DeleteSaleService }
