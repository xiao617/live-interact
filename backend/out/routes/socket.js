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
exports.SocketRouter = void 0;
var room_1 = require("../repo/room");
var SocketRouter = function (server, opts, done) {
    var roomRepo = room_1.RoomRepoImpl.of();
    //server.io.on("connection",)
    // server.get('/messages',(request,reply) =>{
    //     //fastify.on("connection",(socket,Socket) =>{});
    // })
    server.ready().then(function () {
        server.io.on("connection", function (socket) {
            socket.emit("hello", "world");
            //socket.join("room1");
            // socket.to("room1").emit('c1r',"Hi room1");
            // server.io.to("room1").emit("c1r","hoho");
            //console.log("connect client");
            socket.on("check-room", function (roomId, roomOwner) { return __awaiter(void 0, void 0, void 0, function () {
                var roomInfo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, roomRepo.getRoomByRoomId(roomId)];
                        case 1:
                            roomInfo = _a.sent();
                            if (roomInfo.length > 0 && roomInfo[0].owner === roomOwner) {
                                // socket.on(roomId,(roomControl) => {
                                // })
                                socket.emit("hello", "CONNECT TO " + roomId);
                                socket.emit("get-room", roomInfo[0]);
                                //socket.join(`control-${roomId}-active`);
                                socket.join(roomId);
                            }
                            console.log(roomId, roomOwner, roomInfo);
                            return [2 /*return*/];
                    }
                });
            }); });
            socket.on("visit-room", function (roomId, userId) {
                console.log(roomId, userId, "visit");
            });
            socket.on("question-active", function (activeQuestion, roomId) {
                console.log('activate', activeQuestion, "to", roomId);
                socket.broadcast.emit("room-active-" + roomId, activeQuestion);
            });
            socket.on("question-disactive", function (roomId) {
                console.log('disactive', roomId);
                socket.broadcast.emit("room-disactive-" + roomId, "close");
            });
            socket.on("question-response", function (roomId, ans) {
                console.log(roomId, ans);
                socket.broadcast.emit("control-room-" + roomId, parseInt(ans));
            });
            socket.on("c1r", function (msg) {
                try {
                    console.log("SERVER MSG: ", msg);
                    socket.broadcast.emit("c2r", msg);
                }
                catch (e) {
                    console.error(e);
                }
            });
            socket.on("disconnect", function (r) {
                //console.log("disconnect client");
            });
            socket.on("error", function (err) {
                socket.disconnect();
                console.log("error disconnect client");
            });
        });
    });
    done();
};
exports.SocketRouter = SocketRouter;
