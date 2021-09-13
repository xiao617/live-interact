import { optionBody } from "./option"
export type questionBody = {
    readonly _id?: string;
    readonly question: string;
    readonly choices: Array<optionBody>;
}
export interface IQuestion {
    _id?: string;
    question: string;
    choices: Array<optionBody>;
}