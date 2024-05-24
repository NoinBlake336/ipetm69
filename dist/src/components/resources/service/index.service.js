"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.ResourcesServices = void 0;
const index_model_1 = __importDefault(require("../model/index.model"));
const boom = __importStar(require("@hapi/boom"));
class ResourcesServices {
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const resource = yield index_model_1.default.findById(id);
            if (!resource) {
                throw boom.badData('not-existing resources');
            }
            return resource;
        });
    }
    ;
    create(data, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const fullResources = {
                user: userId._id,
                title: data.title,
                description: data.description,
                image: data.image,
                date: Date(),
            };
            const addResource = yield new index_model_1.default(fullResources);
            addResource.save();
            userId.recources = userId.recources.concat(addResource._id);
            yield userId.save();
            return addResource;
        });
    }
    ;
    update(id, changes) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateRecources = yield index_model_1.default.findOneAndUpdate({ _id: id }, { title: changes.title,
                description: changes.description,
                image: changes.image,
                date: new Date() }, { new: true });
            return updateRecources;
        });
    }
    ;
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const resource = yield index_model_1.default.findByIdAndDelete({ _id: id });
            return resource;
        });
    }
}
exports.ResourcesServices = ResourcesServices;
