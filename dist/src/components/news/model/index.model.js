"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const transform_object_1 = require("../../../middlewares/transform.object");
const newsSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'UserModel',
        required: true
    },
    title: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
    enlace: {
        type: String,
        required: false,
    },
    date: Date
});
newsSchema.set('toJSON', {
    transform: transform_object_1.transformObject.json,
});
const newsModel = (0, mongoose_1.model)('NewsModel', newsSchema);
exports.default = newsModel;
