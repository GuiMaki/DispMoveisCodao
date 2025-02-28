import { Request, Response } from "express";

class ListProductController {
    async handle(request: Request, response: Response){

        const product = [{
            name:"Bola de futebol",
            category:"Brinquedos",
            description:"Bola de couro",
            price:"R$30,00",
        },
        {
            name:"Bola de vôlei",
            category:"Brinquedos2",
            description:"Bola de tecido",
            price:"R$30,00",
        }];

        response.json(product)
    }
}

export{ListProductController};
