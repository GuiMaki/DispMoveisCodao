import { Request, Response } from "express";

class ListUserController {
    async handle(request: Request, response: Response){

        const user = [{
            name:"Maki",
            email:"makiyamagui@gmail.com",
            admin:true,
            password:"senhasecreta123"
        },
        {
            name:"Roque",
            email:"maalaumonkeymacaco@maalau.uhuhahah",
            admin:false,
            password:"senha"
        }];

        response.json(user)
    }
}

export{ListUserController};
