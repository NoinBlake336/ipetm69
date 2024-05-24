import { Router } from "express";
import { validateHandler } from "../../middlewares/validatehandler";
import { createResourceSchema, getResourceSchema } from "./schema/index.schema";
import { getResources,createResources,updateResources,deleteResources } from "./controller/index.controller";



const router = Router();

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
router.get('/:id',validateHandler(getResourceSchema,'params'), getResources);
router.post('/',validateHandler(createResourceSchema,'body'),createResources);
router.patch('/:id',validateHandler(getResourceSchema,'params'),validateHandler(createResourceSchema,'body'),updateResources);
router.delete('/:id',validateHandler(getResourceSchema,'parmas'),deleteResources);





export default router;