import { Request, Response } from "express";

class ListCustomerController {
    async handle(request: Request, response: Response){

        const customer = [{
            name:"Willian Zhang Deng Xin Zao",
            number:"+86 (852) 96323-8053",
            email:"williandeng@ching.ling",
            street:"Rua 2",
            neighborhood:"Bairro 1",
            city:"Hong Kong",
            state:"Pequin"
        },
        {
            name:"Donizeti Nobrega Junior Megiati",
            number:"+55 (11) 99301-6972",
            email:"electrinho@gmail.com",
            street:"Rua 1",
            neighborhood:"Bairro 2",
            city:"Suzano",
            state:"São Paulo"
        }];

        response.json(customer)
    }
}

export{ListCustomerController};
