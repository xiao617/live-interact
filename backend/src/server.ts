import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
import { establishConnection } from './plugins/mongoose';
import fastifyStatic from 'fastify-static';
import fastifyCors from 'fastify-cors';
import { UserRouter } from './routes/user';
import { RoomRouter } from './routes/room';
import path from 'path';
import fastifyIO from 'fastify-socket.io';
import { SocketRouter } from './routes/socket';
 
const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({
    logger: { prettyPrint: true }
})
 
const startFastify: (port: number) => FastifyInstance<Server, IncomingMessage, ServerResponse> = (port) => {
 
    server.listen(port, (err, _) => {
        if (err) {
            console.error(err)
        }
        establishConnection()
    })
    server.register(fastifyCors,{})
    server.register(fastifyIO,{
        cors:{
            origin:"*"
        }
    })
    // server.register(fastifyStatic, {
    //     root: path.join(__dirname, '../../frontend/build'),
    //     prefix: '/'
    //   })
    
    server.register(SocketRouter,{})
    server.register(UserRouter,{prefix:'/v1'});
    server.register(RoomRouter,{prefix:'/v1'});
    
 
    return server
}
 
export { startFastify }