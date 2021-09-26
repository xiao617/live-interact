"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var questionSchema = new mongoose_1.Schema({
    id: {
        type: String
    },
    question: {
        type: String,
        default: ""
    },
    choices: {
        type: Array,
        default: []
    }
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('Question', questionSchema);
