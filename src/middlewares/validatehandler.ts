import { Request, Response } from "express"
import * as boom from '@hapi/boom';

  



export const validateHandler = (schema,property:string) =>{
    return (req:Request,res:Response,next)=>{
        const data = req[property];
        const {error} = schema.validate(data);
        if(error){
            next(boom.badRequest(error));
        }

        next(error);
    }
}