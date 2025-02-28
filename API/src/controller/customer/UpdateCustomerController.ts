import { Request, Response } from "express";

class UpdateCustomerController {
    async handle(request: Request, response: Response){
        const {name, number, email, street, neighborhood, city, state} = request.body;

        const id = request.params.id

        const product = {
            id:id,
            name:name,
            number:number,
            email:email,
            street:street,
            neighborhood:neighborhood,
            city:city,
            state:state
        };

        response.json({message: `Registro ${id} atualizado com sucesso`})
    }
}

export{UpdateCustomerController};