import { Response, Request } from "express";
import { INews } from "../interface/index.interface";
import { NewsServices } from "../service/index.service";
import { UserServices } from "../../users/service/index.services";

const services = new NewsServices();
const userService = new UserServices();



export const getNews = async(req:Request,res:Response,next) =>{
    try {
        const {id} = req.params;

    } catch (error) {
        next(error);
    }
};


export const createNews = async(req:Request,res:Response,next) => {
    try {   
        const body = req.body;
        const userId = await userService.findOneUser(body.user);

        const addNews = await services.addNews(body,userId);

        res.status(200).json({addNews});
    } catch (error) {
        next(error)
    }
}