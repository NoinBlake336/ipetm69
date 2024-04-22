import { Request, Response, NextFunction } from "express";
import { IUser } from "../interfaces/index.interfaces";
import { UserServices } from "../service/index.services";

const services = new UserServices();

export class UserController {
    
    async getOneUser(req:Request,res:Response,next:NextFunction):Promise<Object>{
        try {
            const {id} = req.params;
            console.log(id)
            const findOne = services.findOneUser(id);
            return {findOne};
        } catch (error) {
            next(error)
        }
    }
}