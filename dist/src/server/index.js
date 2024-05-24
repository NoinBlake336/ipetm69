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
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("../config"));
const db_1 = require("../db");
const body_parser_1 = __importDefault(require("body-parser"));
const error_handler_1 = require("../middlewares/error.handler");
const users_1 = __importDefault(require("../components/users"));
const news_1 = __importDefault(require("../components/news"));
const resources_1 = __importDefault(require("../components/resources"));
const auth_1 = __importDefault(require("../components/auth"));
const dashboard_1 = __importDefault(require("../components/dashboard"));
const docs_1 = __importDefault(require("../components/docs"));
require("../utils/auth");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.dbConnection();
        this.middlewares();
        this.router();
        this.errorHandler();
        this.listen();
    }
    ;
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, db_1.connectDB)();
        });
    }
    ;
    middlewares() {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use((0, cors_1.default)());
    }
    ;
    errorHandler() {
        this.app.use(error_handler_1.logErrors);
        this.app.use(error_handler_1.errorHandler);
        this.app.use(error_handler_1.boomErrorHandler);
    }
    router() {
        this.app.use('/users', users_1.default);
        this.app.use('/news', news_1.default);
        this.app.use('/recources', resources_1.default);
        this.app.use('/auth', auth_1.default);
        this.app.use('/dashboard', dashboard_1.default);
        this.app.use('/', docs_1.default);
    }
    listen() {
        this.app.listen(config_1.default.port, () => {
            console.log('Bienvenido al servidor', config_1.default.port);
        });
    }
}
exports.Server = Server;
