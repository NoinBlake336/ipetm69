"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_local_1 = require("passport-local");
const boom_1 = __importDefault(require("@hapi/boom"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const index_services_1 = require("../../../components/users/service/index.services");
const service = new index_services_1.UserServices();
const LocalStrategy = new passport_local_1.Strategy({
    usernameField: 'username',
    passwordField: 'password',
}, (username, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield service.getUsername(username);
        if (!user) {
            return done(boom_1.default.unauthorized(), false);
        }
        const isMatch = yield bcrypt_1.default.compare(password, user.password);
        if (!isMatch) {
            return done(boom_1.default.unauthorized(), false);
        }
        return done(null, user);
    }
    catch (error) {
        return done(error, false);
    }
}));
exports.default = LocalStrategy;
