"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var roomSchema = new mongoose_1.Schema({
    roomId: {
        type: String,
        default: ""
    },
    questions: {
        type: Array,
        default: []
    },
    owner: {
        type: String,
        default: ""
    },
    roomName: {
        type: String,
        default: ""
    },
    roomPassword: {
        type: String,
        default: ""
    }
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('Room', roomSchema);
