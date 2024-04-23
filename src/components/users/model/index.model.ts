import { Model, Schema, model } from "mongoose";
import { IUser } from "../interface/index.interfaces";
import { transformObject } from "../../../middlewares/transform.object";


const UserSchema = new Schema<IUser>({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    recources:{
        type:Schema.Types.ObjectId,
        ref:'RecourcesModel',
    },
    news:[{
        type:Schema.Types.ObjectId,
        ref:'NewsModel',
    }],
});

UserSchema.set('toJSON',{
    transform:transformObject.json,
});

const userModel: Model<IUser> = model<IUser>('UserModel',UserSchema);

export default userModel;
