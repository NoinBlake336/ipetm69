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
exports.NewsServices = void 0;
const index_model_1 = __importDefault(require("../model/index.model"));
const boom = __importStar(require("@hapi/boom"));
class NewsServices {
    addNews(data, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const fullNews = {
                user: userId._id,
                title: data.title,
                description: data.description,
                image: data.image,
                enlace: data.enlace,
                date: Date(),
            };
            const addNews = yield new index_model_1.default(fullNews);
            addNews.save();
            userId.news = userId.news.concat(addNews._id);
            yield userId.save();
            return addNews;
        });
    }
    getOne(newsId) {
        return __awaiter(this, void 0, void 0, function* () {
            const News = (yield index_model_1.default.findById(newsId));
            if (!News) {
                throw boom.badRequest('non-existing news');
            }
            ;
            return News;
        });
    }
    ;
    update(newsId, changes) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateNews = yield index_model_1.default.findOneAndUpdate({ _id: newsId }, {
                title: changes.title,
                description: changes.description,
                image: changes.image,
                enlace: changes.enlace,
                date: new Date()
            }, { new: true });
            return updateNews;
        });
    }
    ;
    remove(newsId) {
        return __awaiter(this, void 0, void 0, function* () {
            const News = yield index_model_1.default.findByIdAndDelete({
                _id: newsId
            });
            return News;
        });
    }
}
exports.NewsServices = NewsServices;
