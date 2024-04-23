import { UserServices } from "../../users/service/index.services";
import { INews } from "../interface/index.interface";
import newsModel from "../model/index.model";
const userService = new UserServices();



export class NewsServices {
    async addNews (data,userId):Promise<Object>{
        
        
        
        const fullNews = {
            user: userId._id,
            title: data.title,
            description: data.description,
            image: data.image,
            enlace: data.enlace,
            date: Date(),
        }

        const addNews = await newsModel(fullNews);


        return fullNews
    }
}