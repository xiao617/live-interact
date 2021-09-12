import { optionBody } from "./option"
export type questionBody = {
    readonly id?: string;
    readonly question: string;
    readonly choices: Array<optionBody>;
}
export interface IQuestion {
    id?: string;
    question: string;
    choices: Array<optionBody>;
}