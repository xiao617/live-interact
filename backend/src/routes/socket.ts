import fastify, { FastifyInstance, RouteShorthandOptions, FastifyReply } from 'fastify';
import { request } from 'http';
import { join } from 'path/posix';
import { RoomRepoImpl } from '../repo/room';
import { roomBody } from '../types/room';
import { questionBody } from '../types/question';
const SocketRouter = (server: FastifyInstance, opts: RouteShorthandOptions, done: (error?: Error) => void) => {
    const roomRepo = RoomRepoImpl.of();
    //server.io.on("connection",)
    
    // server.get('/messages',(request,reply) =>{
    //     //fastify.on("connection",(socket,Socket) =>{});
        
    // })
    
    server.ready().then(()=>{
        server.io.on("connection",(socket)=>{
            socket.emit("hello","world");
            //socket.join("room1");
            // socket.to("room1").emit('c1r',"Hi room1");
            // server.io.to("room1").emit("c1r","hoho");
            //console.log("connect client");
            socket.on("check-room",async (roomId,roomOwner)=>{
                
                const roomInfo = await roomRepo.getRoomByRoomId(roomId);
                if(roomInfo.length>0 && roomInfo[0].owner === roomOwner)
                {
                    // socket.on(roomId,(roomControl) => {

                    // })
                    socket.emit("hello",`CONNECT TO ${roomId}`);
                    socket.emit("get-room",roomInfo[0]);
                    //socket.join(`control-${roomId}-active`);
                    socket.join(roomId);
                }
                
                console.log(roomId,roomOwner,roomInfo)
                
            })
            socket.on("visit-room",(roomId,userId)=>{
                console.log(roomId,userId,"visit")
            })
            socket.on("question-active",(activeQuestion:questionBody,roomId:string)=>{
                console.log('activate',activeQuestion,"to",roomId);
                socket.broadcast.emit(`room-active-${roomId}`,activeQuestion);
            })
            socket.on("question-disactive",(roomId:string)=>{
                console.log('disactive',roomId);
                socket.broadcast.emit(`room-disactive-${roomId}`,"close");
            })
            socket.on("question-response",(roomId:string,ans:string)=>{
                console.log(roomId,ans);
                socket.broadcast.emit(`control-room-${roomId}`,parseInt(ans));
            })
            socket.on("c1r",(msg)=>{
                try{
                    
                    console.log("SERVER MSG: ",msg);
                    socket.broadcast.emit("c2r",msg);
                }
                catch(e){
                    console.error(e);
                }
                
            })
            socket.on("disconnect",(r)=>{
                //console.log("disconnect client");
            })
            socket.on("error",(err)=>{
                socket.disconnect();
                console.log("error disconnect client");
            })
        });
        
    });
    
    
    done();
}
export {SocketRouter};
