"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    port: process.env.PORT || 3000,
    urlDb: process.env.URLBD || 'mongodb+srv://pageIpetym69:pagewipetym@cluster0.xaxibxw.mongodb.net/?retryWrites=true&w=majority',
    secretkey: process.env.SECRETKEY || "desarrolloWebEsmiPasion45552"
};
exports.default = config;
