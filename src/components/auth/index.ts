

import express, { Request, Response, NextFunction, Router } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import config  from '../../config';

const router = Router();
/**
 * @swagger
 * /auth:
 *   post:
 *     summary: Autenticación de usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Usuario autenticado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: integer
 *                 token:
 *                   type: string
 *       '401':
 *         description: Falló la autenticación
 */
router.post('/', (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('local', { session: false }, (err, user) => {
        if (err || !user) {
            return res.status(401).json({ message: 'Authentication failed' });
        }
        
        req.logIn(user, { session: false }, (err) => {
            if (err) {
                return next(err);
            }

            const payload = {
                sub: user.id,
            };
            const token = jwt.sign(payload, config.secretkey, { expiresIn: '20min' });

            return res.status(201).json({
                user: user.id,
                token: token,
            });
        });
    })(req, res, next);
});

export default router;
