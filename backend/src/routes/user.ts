import { FastifyInstance, RouteShorthandOptions, FastifyReply } from 'fastify';
import {IUser} from './../types/user';
import { UserRepoImpl } from '../repo/user';

const UserRouter = (server: FastifyInstance, opts: RouteShorthandOptions, done: (error?: Error) => void) => {
    const userRepo = UserRepoImpl.of();

    server.post('/login',opts,async (request,reply) =>{
        try{
            const userInfo:IUser = request.body as IUser;
            const res = await userRepo.postUser(userInfo);
            return reply.status(200).send({user:res});
        }
        catch(e){
            console.error(`POST /user Error: ${e}`);
            return reply.status(500).send(`[Server Error] ${e}`);
        }
    });
    done();
}
export {UserRouter};