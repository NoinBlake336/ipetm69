import { Request, Response, NextFunction } from "express";
import boom from '@hapi/boom';

export const validateHandler = (schema: any, property: string) => {
    return (req: Request, res: Response, next) => {
        const data = req[property];
        const { error } = schema.validate(data);
        if (error) {
            next(boom.badRequest(error.message));
        } else {
            next();
        }
    };
};
