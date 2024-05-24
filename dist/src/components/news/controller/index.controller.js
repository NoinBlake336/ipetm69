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
exports.deleteNews = exports.updateNews = exports.createNews = exports.getNews = void 0;
const index_service_1 = require("../service/index.service");
const index_services_1 = require("../../users/service/index.services");
const services = new index_service_1.NewsServices();
const userService = new index_services_1.UserServices();
const getNews = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const getNews = yield services.getOne(id);
        res.status(200).json(getNews);
    }
    catch (error) {
        next(error);
    }
});
exports.getNews = getNews;
const createNews = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const userId = yield userService.findOneUser(body.user);
        const addNews = yield services.addNews(body, userId);
        res.status(200).json({ addNews });
    }
    catch (error) {
        next(error);
    }
});
exports.createNews = createNews;
const updateNews = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const body = req.body;
        const addUpdateNews = yield services.update(id, body);
        res.status(200).json({ addUpdateNews });
    }
    catch (error) {
        next(error);
    }
});
exports.updateNews = updateNews;
const deleteNews = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        console.log(id);
        const deleteNews = yield services.remove(id);
        res.status(200).json('Delete News');
    }
    catch (error) {
        next(error);
    }
});
exports.deleteNews = deleteNews;
