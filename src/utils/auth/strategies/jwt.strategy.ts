import { Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import config from '../../../config';


const options: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.secretkey,
};

const JwtStrategy = new Strategy(options, (payload, done) => {
    return done(null, payload);
});

export default JwtStrategy;