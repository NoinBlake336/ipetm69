import { Strategy, DoneFunction } from 'passport-local';
import boom from '@hapi/boom';
import bcrypt from 'bcrypt';
import { UserServices } from '../../../components/users/service/index.services';

const service = new UserServices();

const LocalStrategy = new Strategy(
    {
        usernameField: 'username',
        passwordField: 'password',
    },
    async (username: string, password: string, done: DoneFunction) => {
        try {
            const user = await service.getUsername(username);
            if (!user) {
                return done(boom.unauthorized(), false);
            }

            

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return done(boom.unauthorized(), false);
            }
            return done(null, user);
        } catch (error) {
            return done(error, false);
        }
    }
);

export default LocalStrategy;
