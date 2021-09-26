"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var optionSchema = new mongoose_1.Schema({
    id: {
        type: String
    },
    option: {
        type: String,
        default: ""
    },
    selectList: {
        type: Array,
        default: []
    }
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)('Option', optionSchema);
