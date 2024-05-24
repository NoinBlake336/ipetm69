"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validatehandler_1 = require("../../middlewares/validatehandler");
const index_schema_1 = require("./schema/index.schema");
const index_controller_1 = require("./controller/index.controller");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /news/{id}:
 *   get:
 *     summary: Obtener noticia por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Noticia encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 // Especifica las propiedades de la noticia aquí
 *       '404':
 *         description: Noticia no encontrada
 *   post:
 *     summary: Crear una nueva noticia
 *     requestBody:
 *       // Especifica el esquema del cuerpo de la solicitud aquí
 *     responses:
 *       '201':
 *         description: Noticia creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 // Especifica las propiedades de la noticia creada aquí
 *       '400':
 *         description: Error en la solicitud
 *   patch:
 *     summary: Actualizar una noticia existente por ID
 *     parameters:
 *       // Especifica los parámetros de la ruta aquí
 *     requestBody:
 *       // Especifica el esquema del cuerpo de la solicitud aquí
 *     responses:
 *       '200':
 *         description: Noticia actualizada exitosamente
 *       '404':
 *         description: Noticia no encontrada
 *   delete:
 *     summary: Eliminar una noticia por ID
 *     parameters:
 *       // Especifica los parámetros de la ruta aquí
 *     responses:
 *       '204':
 *         description: Noticia eliminada exitosamente
 *       '404':
 *         description: Noticia no encontrada
 */
router.get('/:id', (0, validatehandler_1.validateHandler)(index_schema_1.getNewsSchema, 'params'), index_controller_1.getNews);
router.post('/', (0, validatehandler_1.validateHandler)(index_schema_1.createNewsSchema, 'body'), index_controller_1.createNews);
router.patch('/:id', (0, validatehandler_1.validateHandler)(index_schema_1.getNewsSchema, 'params'), (0, validatehandler_1.validateHandler)(index_schema_1.updateNewsSchema, 'body'), index_controller_1.updateNews);
router.delete('/:id', (0, validatehandler_1.validateHandler)(index_schema_1.getNewsSchema, 'params'), index_controller_1.deleteNews);
exports.default = router;
