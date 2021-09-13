import {IRoom} from './../types/room';
import Room from './../models/room';

interface RoomRepo{
    getAllOwnRoom(ownerId:string): Promise<Array<IRoom>>
    getRoomByRoomId(roomId: string): Promise<Array<IRoom>>
    postRoom(roomInfo: IRoom): Promise<IRoom>
    updateRoom(id:string,roomInfo:IRoom): Promise<IRoom | null>
}
class RoomRepoImpl implements RoomRepo {
    private constructor(){}
    static of(): RoomRepoImpl{
        return new RoomRepoImpl();
    }
    async getAllOwnRoom(ownerId:string): Promise<Array<IRoom>>{
        const res = await Room.find({owner:ownerId});
        return res;
    }
    async getRoomByRoomId(roomId:string): Promise<Array<IRoom>>{
        const res = await Room.find({roomId:roomId});
        return res;
    }
    async postRoom(roomInfo: IRoom): Promise<IRoom>{
        const res = await Room.create(roomInfo);
        return res;
    }
    async updateRoom(id:string,roomInfo:IRoom): Promise<IRoom | null>{
        const res = await Room.findByIdAndUpdate(id,roomInfo,{new:true});
        return res;
    }
}
export {RoomRepoImpl}