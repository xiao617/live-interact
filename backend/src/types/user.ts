export type userBody = {
    readonly name: string;
    readonly _id?: string;
    readonly score: number;
    readonly status: string;
}
export interface IUser{
    name: string;
    _id?: string;
    score: number;
    status: string;
}