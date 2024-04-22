import * as boom from '@hapi/boom';
import UserModel from '../model/index.model';
import { msgError } from '../../../middlewares/badRequestHandler';

export class UserServices {

    async findUser(): Promise<Object> {
        const getUser = await UserModel.find();
        return { getUser };
    }

    async findOneUser(id: string): Promise<Object> {
        try {
            const getOneUser = await UserModel.findById(id);
            
            return { getOneUser };
        } catch (error) {
            // Manejar el error aquí
            console.error("Error en findOneUser:", error);
            throw boom.badRequest('Error al encontrar el usuario');
        }
    };

    async getUsername(username: string) {
        try {
            const user = await UserModel.find({
                username: username,
            });
            msgError(user, 'user');
            return { user };
        } catch (error) {
            // Manejar el error aquí
            console.error("Error en getUsername:", error);
            throw boom.badRequest('Error al obtener el nombre de usuario');
        }
    }
}
