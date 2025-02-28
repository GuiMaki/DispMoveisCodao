import { Request, Response } from "express";

class ListSaleController {
    async handle(request: Request, response: Response){

        const sale = [{
            date:"27/02/2025",
            product:"Bola de futebol",
            customer:"Roque",
            ammount:"2000",
            total:"R$60.000,00"
        },
        {
            date:"26/02/2025",
            product:"Bola de vôlei",
            customer:"Maka",
            ammount:"20000",
            total:"R$600.000,00"
        }];

        response.json(sale)
    }
}

export{ListSaleController};
