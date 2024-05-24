"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = __importDefault(require("../../swagger"));
const router = (0, express_1.Router)();
// Generar especificaciones de Swagger
const specs = (0, swagger_jsdoc_1.default)(swagger_1.default);
// Configurar ruta para la documentación de Swagger
router.use('/', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
exports.default = router;
