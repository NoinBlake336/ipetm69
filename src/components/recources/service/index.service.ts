import { IResources } from "../interfaces/index.interfaces";
import resourcesModel from "../model/index.model";
import * as boom from '@hapi/boom';


export class ResourcesServices {

    async get(id): Promise<Object>{
        const resource = await resourcesModel.findById(id);
        if(!resource){
            throw boom.badData('not-existing resources');
        }
        return  resource; 
    };

    async create(data,userId): Promise<Object>{
        const fullResources: IResources = {
            user: userId._id,
            title: data.title,
            description: data.description,
            image: data.image,
            date: Date(),
        }

        const addResource = await new resourcesModel(fullResources);
        
        addResource.save();

        userId.recources = userId.recources.concat(addResource._id);

        await userId.save();

        return addResource;
    };


    async update(id,changes): Promise<Object>{
        const updateRecources = await resourcesModel.findOneAndUpdate(
            {_id:id},
            {title:changes.title,
            description:changes.description,
            image:changes.image,
            date:new Date()},
            {new:true},
        );

        return updateRecources;
    };


    async remove(id): Promise<Object>{
        const resource = await resourcesModel.findByIdAndDelete({_id:id});
        return resource;
    }




}