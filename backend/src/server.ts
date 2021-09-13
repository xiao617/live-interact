import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
import { establishConnection } from './plugins/mongoose';
import fastifyStatic from 'fastify-static';
import { UserRouter } from './routes/user';
import { RoomRouter } from './routes/room';
import path from 'path';
 
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
   
    server.register(UserRouter,{prefix:'/v1'});
    server.register(RoomRouter,{prefix:'/v1'});
    server.register(fastifyStatic, {
        root: path.join(__dirname, '../../frontend/build'),
        prefix: '/'
      })
 
    return server
}
 
export { startFastify }