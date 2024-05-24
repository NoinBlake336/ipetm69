"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformObject = void 0;
exports.transformObject = {
    json: (document, returnObject) => {
        returnObject.id = returnObject._id;
        delete returnObject._id;
        delete returnObject.__v;
    }
};
