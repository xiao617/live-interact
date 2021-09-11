import axios, { AxiosResponse } from 'axios';

export class NodeService {
    async postUser(userName: string){
        const res = await axios.post('/v1/login',{
            name: userName,
            status: 'user'
        })
        console.log(res.data.user)
        return res.data.user
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