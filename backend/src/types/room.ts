import { questionBody} from "./question"


export type roomBody = {
    readonly owner: string;
    readonly questions: Array<questionBody>;
    readonly roomId: string;
    readonly roomName: string;
    readonly roomPassword: string;
    readonly _id?: string;
}
export interface IRoom  {
    owner: string;
    questions: Array<questionBody>;
    roomId: string;
    roomName: string;
    roomPassword: string;
    _id?: string;
}