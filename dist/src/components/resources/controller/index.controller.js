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
exports.deleteResources = exports.updateResources = exports.createResources = exports.getResources = void 0;
const index_service_1 = require("../service/index.service");
const index_services_1 = require("../../users/service/index.services");
const services = new index_service_1.ResourcesServices();
const serviceUser = new index_services_1.UserServices();
const getResources = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const resources = yield services.get(id);
        res.status(200).json(resources);
    }
    catch (error) {
        next(error);
    }
});
exports.getResources = getResources;
const createResources = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const userId = yield serviceUser.findOneUser(body.user);
        const newResources = yield services.create(body, userId);
        res.status(200).json({
            newResources
        });
    }
    catch (error) {
        next(error);
    }
});
exports.createResources = createResources;
const updateResources = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const body = req.body;
        const addUpdateResources = yield services.update(id, body);
        res.status(200).json({ addUpdateResources });
    }
    catch (error) {
        next(error);
    }
});
exports.updateResources = updateResources;
const deleteResources = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deleteResource = yield services.remove(id);
        res.status(200).json('Delete News');
    }
    catch (error) {
        next(error);
    }
});
exports.deleteResources = deleteResources;
