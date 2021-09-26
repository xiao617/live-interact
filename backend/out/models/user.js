"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        default: ""
    },
    status: {
        type: String,
        default: ""
    },
    score: {
        type: Number,
        default: 0
    },
    password: {
        type: String,
        default: ""
    },
    verification_code: {
        type: String,
        default: ""
    },
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('User', userSchema);
