import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

export const logErrors: ErrorRequestHandler = (err, req, res, next): void => {
    next(err);
};

export const errorHandler: ErrorRequestHandler = (err, req, res, next): void => {
    res.status(500).json({
        message: err.message,
        stack: err.stack
    });
};

export const boomErrorHandler: ErrorRequestHandler = (err, req, res, next): void => {
    if (err.isBoom) {
        const { output } = err;
        res.status(output.statusCode).json(output.payload);
    } else {
        next(err);
    }
};
