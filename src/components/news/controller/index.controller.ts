import { Response, Request } from "express";
import { NewsServices } from "../service/index.service";
import { UserServices } from "../../users/service/index.services";

const services = new NewsServices();
const userService = new UserServices();



export const getNews = async(req:Request,res:Response,next):Promise<void> =>{
    try {   
        const {id} = req.params;
        const getNews = await services.getOne(id);
        res.status(200).json(getNews)
    } catch (error) {
        next(error);
    }
};


export const createNews = async(req:Request,res:Response,next):Promise<void> => {
    try {       
        const body = req.body;
        const userId = await userService.findOneUser(body.user);

        const addNews = await services.addNews(body,userId);

        res.status(200).json({addNews});
        
    } catch (error) {
        next(error)
    }
};


export const updateNews = async(req:Request,res:Response,next):Promise<void>=>{
    try {   
        const {id} = req.params;
        const body = req.body;
        const addUpdateNews = await services.update(id,body);
        res.status(200).json({addUpdateNews});
    } catch (error) {
        next(error);
    }
}


export const deleteNews = async(req:Request,res:Response,next): Promise<void>=>{
    try {
        const {id} = req.params;
        console.log(id);
        
        const deleteNews = await services.remove(id);
        res.status(200).json('Delete News');
    } catch (error) {
        next(error);
    }
}