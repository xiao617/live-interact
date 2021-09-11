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
    
}