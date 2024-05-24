"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNewsSchema = exports.getNewsSchema = exports.createNewsSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const promps = {
    id: joi_1.default.string(),
    user: joi_1.default.string(),
    title: joi_1.default.string(),
    description: joi_1.default.string(),
    image: joi_1.default.string(),
    enlace: joi_1.default.string(),
};
exports.createNewsSchema = joi_1.default.object({
    user: promps.user.required(),
    title: promps.title.required(),
    description: promps.description.required(),
    image: promps.image.required(),
    enlace: promps.enlace.required(),
});
exports.getNewsSchema = joi_1.default.object({
    id: promps.id.required()
});
exports.updateNewsSchema = joi_1.default.object({
    title: promps.title,
    description: promps.description,
    image: promps.image,
    enlace: promps.enlace
});
