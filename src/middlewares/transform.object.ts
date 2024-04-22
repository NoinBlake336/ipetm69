export const transformObject = {
    json:(document:any,returnObject:any):void=>{
        returnObject.id = returnObject._id;
        delete returnObject._id;
        delete returnObject.__v;
    }
};