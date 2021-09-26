"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomRouter = void 0;
var room_1 = require("../repo/room");
var RoomRouter = function (server, opts, done) {
    var roomRepo = room_1.RoomRepoImpl.of();
    server.get('/rooms/:roomId', opts, function (request, reply) { return __awaiter(void 0, void 0, void 0, function () {
        var roomId, res, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    roomId = request.params.roomId;
                    return [4 /*yield*/, roomRepo.getRoomByRoomId(roomId)];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, reply.status(200).send({ rooms: res })];
                case 2:
                    e_1 = _a.sent();
                    console.error("GET /rooms/:roomId Error: " + e_1);
                    return [2 /*return*/, reply.status(500).send("[Server Error] " + e_1)];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    server.get('/owner-rooms/:ownerId', opts, function (request, reply) { return __awaiter(void 0, void 0, void 0, function () {
        var ownerId, res, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    ownerId = request.params.ownerId;
                    return [4 /*yield*/, roomRepo.getAllOwnRoom(ownerId)];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, reply.status(200).send({ rooms: res })];
                case 2:
                    e_2 = _a.sent();
                    console.error("GET /owner-rooms/:ownerId Error: " + e_2);
                    return [2 /*return*/, reply.status(500).send("[Server Error] " + e_2)];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    server.put('/rooms/:id', opts, function (request, reply) { return __awaiter(void 0, void 0, void 0, function () {
        var id, roomInfo, res, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = request.params.id;
                    roomInfo = request.body;
                    return [4 /*yield*/, roomRepo.updateRoom(id, roomInfo)];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, reply.status(200).send({ room: res })];
                case 2:
                    e_3 = _a.sent();
                    console.error("PUT /rooms/:id Error: " + e_3);
                    return [2 /*return*/, reply.status(500).send("[Server Error] " + e_3)];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    server.post('/rooms', opts, function (request, reply) { return __awaiter(void 0, void 0, void 0, function () {
        var roomInfo, res, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    roomInfo = request.body;
                    return [4 /*yield*/, roomRepo.postRoom(roomInfo)];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, reply.status(200).send({ room: res })];
                case 2:
                    e_4 = _a.sent();
                    console.error("POST /rooms Error: " + e_4);
                    return [2 /*return*/, reply.status(500).send("[Server Error] " + e_4)];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    done();
};
exports.RoomRouter = RoomRouter;