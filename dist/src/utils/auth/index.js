"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// utils/auth/index.ts
const passport_1 = __importDefault(require("passport"));
const local_strategy_1 = __importDefault(require("./strategies/local.strategy"));
const jwt_strategy_1 = __importDefault(require("./strategies/jwt.strategy"));
passport_1.default.use('local', local_strategy_1.default);
passport_1.default.use('jwt', jwt_strategy_1.default);
exports.default = passport_1.default;
