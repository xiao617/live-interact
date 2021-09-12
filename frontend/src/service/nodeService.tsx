import axios, { AxiosResponse } from 'axios';
import { userBody,optionBody,questionBody,roomBody } from '../types/typeObject';

export class NodeService {
    async postUser(userName: string){
        const res = await axios.post('/v1/login',{
            name: userName,
            status: 'user'
        })
        console.log(res.data.user);
        return res.data.user;
    }
    async postRoom(problemList: Array<questionBody>, user: userBody){
        const roomId = this.getRandomKey(8);
        const res = await axios.post('/v1/rooms',{
            owner: user,
            roomId: roomId,
            questions: problemList
        });
        return res.data.room;
    }
    async getRoom(roomId: string)
    {
        const res = await axios.get(`/v1/rooms/${roomId}`);
        
        return res.data.rooms;
    }
    async updateRoom(roomInfo: roomBody)
    {
        //console.log(roomInfo);
        const id = roomInfo.id;
        const res = await axios.put(`/v1/rooms/${id}`,{
            questions: roomInfo.questions
        })
        //console.log(res);

    }
    getRandomKey(length: number){
        var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var result = '';
        for ( var i = 0; i < length; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return result;
    }
}