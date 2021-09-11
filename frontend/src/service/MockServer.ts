import { createServer, Factory, Model } from "miragejs";
import {userBody} from "../types/typeObject";

export function MockServer({ environment = "development" }) {
  return createServer({
    environment,
    models: {
      user: Model.extend<Partial<userBody>>({})
    },
    factories: {
    },
    seeds(server) {
      //server.schema.create('todo',{ name: "Go to Market" });
      //server.create("todo", { name: "Buy Cookies" });
      //server.createList("todo", 3);
    },
    routes() {
      
      this.post("/v1/login", (schema, request) => {
        //debugger;
        let attrs = JSON.parse(request.requestBody);
        const res = schema.create("user", attrs);
        return res;
      });
      
    }
  });
}