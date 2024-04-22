import * as boom from '@hapi/boom';
import UserModel from '../model/index.model';
import { IUser } from '../interfaces/index.interfaces';
import { msgError } from '../../../middlewares/badRequestHandler';

export class UserServices {
    async findOneUser(id:string):Promise<Object>{
        const getUser = await UserModel.findById(id);
        msgError(getUser,'user');
        return {getUser};
    };

    async getUsername(username:string){
        const user = await UserModel.find({
            username:username,
        });
        msgError(user,'user');
        return {user};
    }
}