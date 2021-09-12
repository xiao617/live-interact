export type userBody = {
    name: string;
    id?: string;
    score: number;
    status: string;
}
export type optionBody = {
    id:string;
    option: string;
    selectedList: Array<userBody>;
}
export type questionBody = {
    id?: string;
    question: string;
    choices: Array<optionBody>;
}
export type roomBody = {
    owner: string;
    questions: Array<questionBody>;
    roomId: string;
    id?: string;
}
export type paramBody = {
    roomId: string;
}