import { Model, Schema, model } from "mongoose";
import { IResources } from "../interfaces/index.interfaces";
import { transformObject } from "../../../middlewares/transform.object";





const resourcesSchema = new Schema<IResources>({
    user:{
        type:Schema.Types.ObjectId,
        ref:'UserModel',
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type: String,
        required:true,
    },
    image:{
        type: String,
        required:true,
    },
    date:Date,
});


resourcesSchema.set('toJSON',{
    transform:transformObject.json,
});



const resourcesModel: Model<IResources> = model<IResources>('RecourcesModel',resourcesSchema);


export default resourcesModel;