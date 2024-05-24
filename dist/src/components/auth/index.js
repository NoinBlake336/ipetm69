"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../config"));
const router = (0, express_1.Router)();
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
router.post('/', (req, res, next) => {
    passport_1.default.authenticate('local', { session: false }, (err, user) => {
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
            const token = jsonwebtoken_1.default.sign(payload, config_1.default.secretkey, { expiresIn: '20min' });
            return res.status(201).json({
                user: user.id,
                token: token,
            });
        });
    })(req, res, next);
});
exports.default = router;
