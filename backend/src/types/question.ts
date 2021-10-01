import { optionBody } from "./option"
export type questionBody = {
    readonly _id?: string;
    readonly question: string;
    readonly isActive: boolean;
    readonly choices: Array<optionBody>;
}
export interface IQuestion {
    _id?: string;
    question: string;
    isActive: boolean;
    choices: Array<optionBody>;
}