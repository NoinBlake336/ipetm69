import * as boom from '@hapi/boom';
import userModel from '../model/index.model';


export class UserServices {

    async findUser(): Promise<Object> {
        const getUser = await userModel.find()
        .populate('news','-user')
        .populate('recources', '-user')
        return { getUser };
    };

    async findOneUser(id:string): Promise<Object> {

        const getOneUser = await userModel.findById(id);
        if(!getOneUser){
            throw boom.badRequest('no user');
        }
        return getOneUser;

    };

    async getUsername(username: string) {
        const user = await userModel.find({
            username: username,
        });
        if(!user){
            throw boom.badRequest('no user');
        }
        return user;
    }
    
}
