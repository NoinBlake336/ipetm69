import { INews } from "../interface/index.interface";
import newsModel from "../model/index.model";
import * as boom from '@hapi/boom';




export class NewsServices {
    async addNews (data,userId):Promise<Object>{
        
        
        
        const fullNews: INews = {
            user: userId._id,
            title: data.title,
            description: data.description,
            image: data.image,
            enlace: data.enlace,
            date: Date(),
        }

        const addNews = await new newsModel(fullNews);

        addNews.save();
    
        userId.news = userId.news.concat(addNews._id);

        await userId.save();






        return addNews;
    }

    async getOne (newsId:string): Promise<Object>{
        const News = (await newsModel.findById(newsId))
        
        if(!News){
            throw boom.badRequest('non-existing news');
        };

        return News;
    };

    async update (newsId,changes): Promise<Object> {
        const updateNews = await newsModel.findOneAndUpdate(
            {_id:newsId},
            {
                title:changes.title,
                description:changes.description,
                image:changes.image,
                enlace:changes.enlace,
                date:new Date()
            },
            {new:true}
        );

        return updateNews;
    };


    async remove(newsId:string): Promise<Object>{
        const News = await newsModel.findByIdAndDelete({
            _id:newsId
        });

        return News
    }
}