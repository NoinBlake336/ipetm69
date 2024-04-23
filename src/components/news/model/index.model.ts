import { Model, Schema, model } from "mongoose";
import { INews } from "../interface/index.interface";
import { transformObject } from "../../../middlewares/transform.object";




const newsSchema = new Schema<INews>({
    user:{
        type:Schema.Types.ObjectId,
        ref:'UserModel',
        require:true
    },
    title:{
        type:String,
        require:false
    },
    description:{
        type:String,
        require:false,
    },
    image:{
        type:String,
        require:false,
    },
    enlace:{
        type:String,
        require:false,
    },
    date:Date
});



newsSchema.set('toJSON',{
    transform:transformObject.json,
});


const newsModel: Model<INews> = model<INews>('NewsModel', newsSchema);

export default newsModel;