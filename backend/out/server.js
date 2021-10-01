"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startFastify = void 0;
var fastify_1 = __importDefault(require("fastify"));
var mongoose_1 = require("./plugins/mongoose");
var fastify_cors_1 = __importDefault(require("fastify-cors"));
var user_1 = require("./routes/user");
var room_1 = require("./routes/room");
var fastify_socket_io_1 = __importDefault(require("fastify-socket.io"));
var socket_1 = require("./routes/socket");
var server = (0, fastify_1.default)({
    logger: { prettyPrint: true }
});
var startFastify = function (port) {
    server.listen(port, function (err, _) {
        if (err) {
            console.error(err);
        }
        (0, mongoose_1.establishConnection)();
    });
    server.register(fastify_cors_1.default, {});
    server.register(fastify_socket_io_1.default, {
        cors: {
            origin: "*"
        }
    });
    // server.register(fastifyStatic, {
    //     root: path.join(__dirname, '../../frontend/build'),
    //     prefix: '/'
    //   })
    server.register(socket_1.SocketRouter, {});
    server.register(user_1.UserRouter, { prefix: '/v1' });
    server.register(room_1.RoomRouter, { prefix: '/v1' });
    return server;
};
exports.startFastify = startFastify;
