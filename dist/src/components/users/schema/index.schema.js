"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const id = joi_1.default.string();
const username = joi_1.default.string();
const password = joi_1.default.string();
exports.getUserSchema = joi_1.default.object({
    id,
    username,
});
