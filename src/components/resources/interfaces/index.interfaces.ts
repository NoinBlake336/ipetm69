import { ObjectId } from "mongoose";

export interface IResources {
    user:ObjectId,
    title:string,
    description:string,
    image:string,
    date:string,
}