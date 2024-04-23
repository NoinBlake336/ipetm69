import { Model, Schema, model } from "mongoose";
import { INews } from "../interface/index.interface";
import { transformObject } from "../../../middlewares/transform.object";




const newsSchema = new Schema<INews>({
    user:{
        type:Schema.Types.ObjectId,
        ref:'UserModel',
        required:true
    },
    title:{
        type:String,
        required:false
    },
    description:{
        type:String,
        required:false,
    },
    image:{
        type:String,
        required:false,
    },
    enlace:{
        type:String,
        required:false,
    },
    date:Date
});



newsSchema.set('toJSON',{
    transform:transformObject.json,
});


const newsModel: Model<INews> = model<INews>('NewsModel', newsSchema);

export default newsModel;