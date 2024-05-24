"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validatehandler_1 = require("../../middlewares/validatehandler");
const index_schema_1 = require("./schema/index.schema");
const index_controller_1 = require("./controller/index.controller");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /resources/{id}:
 *   get:
 *     summary: Obtener recurso por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Recurso encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 // Especifica las propiedades del recurso aquí
 *       '404':
 *         description: Recurso no encontrado
 *   post:
 *     summary: Crear un nuevo recurso
 *     requestBody:
 *       // Especifica el esquema del cuerpo de la solicitud aquí
 *     responses:
 *       '201':
 *         description: Recurso creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 // Especifica las propiedades del recurso creado aquí
 *       '400':
 *         description: Error en la solicitud
 *   patch:
 *     summary: Actualizar un recurso existente por ID
 *     parameters:
 *       // Especifica los parámetros de la ruta aquí
 *     requestBody:
 *       // Especifica el esquema del cuerpo de la solicitud aquí
 *     responses:
 *       '200':
 *         description: Recurso actualizado exitosamente
 *       '404':
 *         description: Recurso no encontrado
 *   delete:
 *     summary: Eliminar un recurso por ID
 *     parameters:
 *       // Especifica los parámetros de la ruta aquí
 *     responses:
 *       '204':
 *         description: Recurso eliminado exitosamente
 *       '404':
 *         description: Recurso no encontrado
 */
router.get('/:id', (0, validatehandler_1.validateHandler)(index_schema_1.getResourceSchema, 'params'), index_controller_1.getResources);
router.post('/', (0, validatehandler_1.validateHandler)(index_schema_1.createResourceSchema, 'body'), index_controller_1.createResources);
router.patch('/:id', (0, validatehandler_1.validateHandler)(index_schema_1.getResourceSchema, 'params'), (0, validatehandler_1.validateHandler)(index_schema_1.createResourceSchema, 'body'), index_controller_1.updateResources);
router.delete('/:id', (0, validatehandler_1.validateHandler)(index_schema_1.getResourceSchema, 'parmas'), index_controller_1.deleteResources);
exports.default = router;
