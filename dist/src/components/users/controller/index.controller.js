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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneUser = exports.getUser = void 0;
const index_services_1 = require("../service/index.services");
const services = new index_services_1.UserServices();
const getUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const find = yield services.findUser();
        res.status(200).json({ find });
    }
    catch (error) {
        next(error);
    }
});
exports.getUser = getUser;
const getOneUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const find = yield services.findOneUser(id);
        res.status(200).json({ find });
    }
    catch (error) {
        next(error);
    }
});
exports.getOneUser = getOneUser;
