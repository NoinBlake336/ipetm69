"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Mi API',
        version: '1.0.0',
        description: 'Backend de Ipetym69',
    },
};
const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['./src/components/**/*{.js,.ts}'],
};
exports.default = options;
