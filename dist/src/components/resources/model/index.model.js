"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const transform_object_1 = require("../../../middlewares/transform.object");
const resourcesSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'UserModel',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    date: Date,
});
resourcesSchema.set('toJSON', {
    transform: transform_object_1.transformObject.json,
});
const resourcesModel = (0, mongoose_1.model)('RecourcesModel', resourcesSchema);
exports.default = resourcesModel;
