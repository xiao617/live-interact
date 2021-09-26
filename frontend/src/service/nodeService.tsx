import axios, { AxiosResponse } from 'axios'
import { userBody, optionBody, questionBody, roomBody, userState,responseBody } from '../types/typeObject'

export class NodeService {
  domain_url = 'http://localhost:8888'
  async postUser(userData: userBody) {
    const res = await axios.post(this.domain_url+'/v1/login', {
      name: userData.name,
      password: userData.password,
      verification_code: userData.verification_code,
    })
    if(res.status === 204)
    {
      const respn = {result: false,name:"",_id:""} as responseBody
      return respn
    }
    console.log(res)
    const respn = {result: true,name: userData.name,_id:res.data.user._id } as responseBody
    return respn
  }
  async postRoom(problemList: Array<questionBody>, userid: string) {
    const roomId = this.getRandomKey(8)
    const res = await axios.post(this.domain_url+'/v1/rooms', {
      owner: userid,
      roomId: roomId,
      questions: problemList,
    })
    return res.data.room
  }
  async getRoom(roomId: string) {
    const res = await axios.get(`${this.domain_url}/v1/rooms/${roomId}`)

    return res.data.rooms
  }
  async getAllOwnRooms(userId: string) {
    const res = await axios.get(`${this.domain_url}/v1/owner-rooms/${userId}`)
    return res.data.rooms
  }
  async updateRoom(roomInfo: roomBody) {
    //console.log(roomInfo);
    const id = roomInfo._id
    const res = await axios.put(`${this.domain_url}/v1/rooms/${id}`, {
      questions: roomInfo.questions,
      _id: id,
      roomId: roomInfo.roomId,
      owner: roomInfo.owner,
    })
    //console.log(res);
  }
  
  getRandomKey(length: number) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var result = ''
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length))
    }
    return result
  }
}
