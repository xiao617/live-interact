import { questionBody} from "./question"


export type roomBody = {
    readonly owner: string;
    readonly questions: Array<questionBody>;
    readonly roomId: string;
    readonly _id?: string;
}
export interface IRoom  {
    owner: string;
    questions: Array<questionBody>;
    roomId: string;
    _id?: string;
}