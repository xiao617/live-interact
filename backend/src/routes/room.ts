import { FastifyInstance, RouteShorthandOptions, FastifyReply } from 'fastify';
import {IRoom} from './../types/room';
import { RoomRepoImpl } from '../repo/room';

const RoomRouter = (server: FastifyInstance, opts: RouteShorthandOptions, done: (error?: Error) => void) => {
    const roomRepo = RoomRepoImpl.of();
    interface IdParam {
        id: string;
    }
    interface RoomIdParam {
        roomId: string;
    }
    interface OwnerParam {
        ownerId: string;
    }
    server.get<{Params: RoomIdParam}>('/rooms/:roomId',opts,async (request,reply) =>{
        try{
            const roomId = request.params.roomId;
            const res = await roomRepo.getRoomByRoomId(roomId);
            return reply.status(200).send({rooms:res});
        }
        catch(e){
            console.error(`GET /rooms/:roomId Error: ${e}`);
            return reply.status(500).send(`[Server Error] ${e}`);
        }
    });
    server.get<{Params: OwnerParam}>('/owner-rooms/:ownerId',opts,async (request,reply) =>{
        try{
            const ownerId = request.params.ownerId;
            const res = await roomRepo.getAllOwnRoom(ownerId);
            return reply.status(200).send({rooms:res});
        }
        catch(e){
            console.error(`GET /owner-rooms/:ownerId Error: ${e}`);
            return reply.status(500).send(`[Server Error] ${e}`);
        }
    });
    server.put<{Params: IdParam}>('/rooms/:id',opts,async (request,reply) =>{
        try{
            const id = request.params.id;
            const roomInfo:IRoom = request.body as IRoom;
            const res = await roomRepo.updateRoom(id,roomInfo);
            return reply.status(200).send({room:res});
        }
        catch(e){
            console.error(`PUT /rooms/:id Error: ${e}`);
            return reply.status(500).send(`[Server Error] ${e}`);
        }
    });
    server.post('/rooms',opts,async (request,reply) =>{
        try{
            const roomInfo:IRoom = request.body as IRoom;
            const res = await roomRepo.postRoom(roomInfo);
            return reply.status(200).send({room:res});
        }
        catch(e){
            console.error(`POST /rooms Error: ${e}`);
            return reply.status(500).send(`[Server Error] ${e}`);
        }
    });
    done();
}
export {RoomRouter};