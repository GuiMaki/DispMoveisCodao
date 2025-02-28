import { Request, Response } from "express";

class ListCategoryController {
    async handle(request: Request, response: Response){

        const category = [{
            name:"Brinquedos",
        },
        {
            name:"Brinquedos 2",
        }];

        response.json(category)
    }
}

export{ListCategoryController};
