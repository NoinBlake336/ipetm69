import { Request, Response } from "express";
import { ResourcesServices } from "../service/index.service";
import { UserServices } from "../../users/service/index.services";


const services = new ResourcesServices();
const serviceUser = new UserServices();


export const getResources = async(req:Request,res:Response,next):Promise<void> =>{
    try {
        const {id} = req.params;
        const resources = await services.get(id);
        res.status(200).json(resources);
    } catch (error) {
        next(error)
    }
};

export const createResources = async(req:Request,res:Response,next):Promise<void> =>{
    try {
        const body = req.body;
        const userId = await serviceUser.findOneUser(body.user);
        const newResources = await services.create(body,userId);
        res.status(200).json({
            newResources
        });
    } catch (error) {
        next(error)
    }
};

export const updateResources = async(req:Request,res:Response,next):Promise<void> =>{
    try {
        const {id} = req.params;
        const body = req.body;
        const addUpdateResources = await services.update(id,body);
        res.status(200).json({addUpdateResources});
    } catch (error) {
        next(error)
    }
};

export const deleteResources = async(req:Request,res:Response,next):Promise<void> =>{
    try {
        const {id} = req.params;
        
        const deleteResource = await services.remove(id);
        res.status(200).json('Delete News');

    } catch (error) {
        next(error)
    }
};
