import { userBody } from "./user"
export type optionBody = {
    readonly id:string;
    readonly option: string;
    readonly selectedList: Array<userBody>;
}
export interface IOption{
    id:string;
    option: string;
    selectedList: Array<userBody>;
}