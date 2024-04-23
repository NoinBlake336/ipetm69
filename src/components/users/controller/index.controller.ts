import { Request, Response, NextFunction } from "express";
import { UserServices } from "../service/index.services";

const services = new UserServices();


    
 export const getUser = async(req:Request,res:Response,next):Promise<void> =>{
        try {
            const find = await services.findUser();
            res.status(200).json({find});
        } catch (error) {
            next(error);
        }
    }

export const getOneUser = async(req:Request,res:Response,next):Promise<void> => {
        try {
            const {id} = req.params;
            const findOne = await services.findOneUser(id);
            res.status(200).json({findOne});
        } catch (error) {
            next(error);
        }
    }