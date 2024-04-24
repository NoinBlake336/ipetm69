import jwt, { JwtPayload } from 'jsonwebtoken';
import * as boom from '@hapi/boom';
import { Request, Response} from 'express';
import config from '../config';

export const authenticateToken = (req: Request, res: Response, next): void => {
    const token = req.headers['token'] as string | undefined;

    if (token) {
        jwt.verify(token, config.secretkey, (err: any, decode: JwtPayload | undefined) => {
            if (err || !decode) {
                next(boom.badRequest('El token es inválido'));
            } else {
                req.user = decode;
                next();
            }
        });
    } else {
        res.status(401).send('Unauthorized');
    }
};
