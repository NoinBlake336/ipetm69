import * as boom from "@hapi/boom";
import { NextFunction, Request, Response } from "express";

export const msgError = (condition,msg:string):void=>{
    if(!condition){
        throw boom.badRequest(`not ${msg}`)
    }    


    
}