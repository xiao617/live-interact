import { userBody } from "./user"
export type optionBody = {
    readonly _id:string;
    readonly option: string;
    readonly selectedList: Array<userBody>;
}
export interface IOption{
    _id:string;
    option: string;
    selectedList: Array<userBody>;
}