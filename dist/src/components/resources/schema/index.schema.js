"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateResourceSchema = exports.createResourceSchema = exports.getResourceSchema = exports.promps = void 0;
const joi_1 = __importDefault(require("joi"));
exports.promps = {
    id: joi_1.default.string(),
    user: joi_1.default.string(),
    title: joi_1.default.string(),
    description: joi_1.default.string(),
    image: joi_1.default.string(),
};
exports.getResourceSchema = joi_1.default.object({
    id: exports.promps.id.required(),
});
exports.createResourceSchema = joi_1.default.object({
    user: exports.promps.user,
    title: exports.promps.title,
    description: exports.promps.description,
    image: exports.promps.image
});
exports.updateResourceSchema = joi_1.default.object({
    title: exports.promps.title,
    description: exports.promps.description,
    image: exports.promps.image,
});
