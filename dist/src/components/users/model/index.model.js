"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const transform_object_1 = require("../../../middlewares/transform.object");
const UserSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    recources: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'RecourcesModel',
        }],
    news: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'NewsModel',
        }],
});
UserSchema.set('toJSON', {
    transform: transform_object_1.transformObject.json,
});
const userModel = (0, mongoose_1.model)('UserModel', UserSchema);
exports.default = userModel;
