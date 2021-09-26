import { createServer, Factory, Model } from 'miragejs'
import { userBody, optionBody, questionBody, roomBody } from '../types/typeObject'

export function MockServer({ environment = 'development' }) {
  return createServer({
    environment,
    models: {
      user: Model.extend<Partial<userBody>>({}),
      room: Model.extend<Partial<roomBody>>({}),
    },
    factories: {},
    seeds(server) {
      //server.schema.create('todo',{ name: "Go to Market" });
      //server.create("todo", { name: "Buy Cookies" });
      //server.createList("todo", 3);
    },
    routes() {
      this.post('/v1/login', (schema, request) => {
        //debugger;
        let attrs = JSON.parse(request.requestBody)
        const res = schema.create('user', attrs)
        return res
      })
      this.post('/v1/rooms', (schema, request) => {
        let attrs = JSON.parse(request.requestBody)
        const res = schema.create('room', attrs)
        return res
      })
      this.get('/v1/rooms/:roomKey', (schema, request) => {
        let roomKeyNum = request.params.roomKey ?? ''
        let roomInfo = schema.where('room', { roomId: roomKeyNum })
        //roomInfo;

        //let roomInfo = schema.where("room",)
        return roomInfo
      })
      this.get('/v1/owner-rooms/:userId', (schema, request) => {
        let userId = request.params.userId
        let roomsInfo = schema.where('room', { owner: userId })
        return roomsInfo
      })
      this.put('/v1/rooms/:id', (schema, request) => {
        let id = request.params.id
        let attrs = JSON.parse(request.requestBody)
        let roomTarget = schema.findBy('room', { id: id })
        //console.log(roomTarget,attrs);
        if (roomTarget !== null) {
          roomTarget.update({ questions: attrs.questions })
        }

        return schema.all('room')
      })
    },
  })
}
