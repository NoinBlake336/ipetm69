import { SwaggerDefinition, Options } from 'swagger-jsdoc';

const swaggerDefinition: SwaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Mi API',
    version: '1.0.0',
    description: 'Backend de Ipetym69',
  },
};

const options: Options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./src/components/**/*{.js,.ts}'],
};

export default options;
