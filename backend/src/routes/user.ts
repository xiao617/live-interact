import { FastifyInstance, RouteShorthandOptions, FastifyReply } from 'fastify';
import {IUser} from './../types/user';
import { UserRepoImpl } from '../repo/user';

const UserRouter = (server: FastifyInstance, opts: RouteShorthandOptions, done: (error?: Error) => void) => {
    const userRepo = UserRepoImpl.of();

    server.post('/login',opts,async (request,reply) =>{
        try{
            const userInfo:IUser = request.body as IUser;
            if(userInfo.verification_code !== "tsmc21.10")
            {
                return reply.status(204).send();
            }
            const checkUserAvailable = await userRepo.checkUser(userInfo);
            console.log(checkUserAvailable);
            if(checkUserAvailable === "can_create")//check register
            {
                const res = await userRepo.postUser(userInfo);
                console.log(res);
                return reply.status(200).send({user:res});
            }
            else if(checkUserAvailable === "login_success")
            {
                const res = await userRepo.getUser(userInfo);
                const ares = {name:res?.name,_id:res?._id}
                return reply.status(200).send({user:ares});
            }
            else{
                return reply.status(204)
            }
            
        }
        catch(e){
            console.error(`POST /user Error: ${e}`);
            return reply.status(500).send(`[Server Error] ${e}`);
        }
    });
    done();
}
export {UserRouter};