import * as boom from '@hapi/boom';
import UserModel from '../model/index.model';


export class UserServices {

    async findUser(): Promise<Object> {
        const getUser = await UserModel.find();
        return { getUser };
    }

    async findOneUser(id:string): Promise<Object> {

        const getOneUser = await UserModel.findById(id);
        console.log(getOneUser) 
        if(!getOneUser){
            throw boom.badRequest('no user');
        }
        return getOneUser;

    };

    async getUsername(username: string) {
        const user = await UserModel.find({
            username: username,
        });
        if(!user){
            throw boom.badRequest('no user');
        }
        return user;
    }
    
}
