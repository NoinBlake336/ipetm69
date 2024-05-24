import { Router } from "express";
import { validateHandler } from "../../middlewares/validatehandler";
import { getNewsSchema, updateNewsSchema, createNewsSchema } from "./schema/index.schema";
import { createNews,deleteNews,getNews,updateNews } from "./controller/index.controller";

const router = Router();
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


router.get('/:id', validateHandler(getNewsSchema,'params'), getNews);
router.post('/', validateHandler(createNewsSchema,'body'), createNews);
router.patch('/:id', validateHandler(getNewsSchema,'params'),validateHandler(updateNewsSchema,'body'),updateNews);
router.delete('/:id',validateHandler(getNewsSchema,'params'),deleteNews)

export default router;

