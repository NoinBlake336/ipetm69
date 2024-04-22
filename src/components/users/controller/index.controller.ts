import { Request, Response, NextFunction } from "express";
import { UserServices } from "../service/index.services";

const services = new UserServices();


    
 export const getUser = async(req:Request,res:Response,next:NextFunction):Promise<Object> =>{
        try {
            const find = await services.findUser();
            return {find};
        } catch (error) {
            next(error);
        }
    }

export const getOneUser = async(req:Request,res:Response,next:NextFunction):Promise<Object> => {
        try {
            const {id} = req.params;
            const findOne = await services.findOneUser(id);
            return {findOne};
        } catch (error) {
            next(error)
        }
    }