export type userBody = {
    name: string;
    _id?: string;
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
    _id?: string;
}
export type paramBody = {
    roomId: string;
}

export type userState = {
    name: string;
    id?: string;
    score: number;
    status: string;
}