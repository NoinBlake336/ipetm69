import {Router} from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from '../../swagger';

const router = Router();

// Generar especificaciones de Swagger
const specs = swaggerJsdoc(swaggerOptions);

// Configurar ruta para la documentación de Swagger
router.use('/', swaggerUi.serve, swaggerUi.setup(specs));


export default router;

