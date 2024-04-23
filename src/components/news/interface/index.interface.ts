import { StringSchemaDefinition } from "mongoose";

export interface INews {
    user:Object,
    title:string,
    description:string,
    image:string,
    enlace:string,
    date:string,
}