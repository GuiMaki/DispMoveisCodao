class DeleteProductService {
    async execute(id:string) {

        console.log(id);

        const msg = {
            message: `Registro ${id} removido com sucesso`
        }

        return msg
    }
}

export { DeleteProductService }
