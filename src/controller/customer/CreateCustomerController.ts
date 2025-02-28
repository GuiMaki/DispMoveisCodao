import { Request, Response } from "express";

class CreateCustomerController {
    async handle(request: Request, response: Response){
        const {name, number, email, street, neighborhood, city, state} = request.body;

        const customer = {
            name:name,
            number:number,
            email:email,
            street:street,
            neighborhood:neighborhood,
            city:city,
            state:state
        };

        response.json({message: "Registro incluído com sucesso"})
    }
}

export{CreateCustomerController};