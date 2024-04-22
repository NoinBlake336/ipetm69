import * as boom from "@hapi/boom";

export const msgError = (condition,msg:string):void=>{
    if(!condition) throw boom.badRequest(`not ${msg}`);
}