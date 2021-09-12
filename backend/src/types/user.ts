export type userBody = {
    readonly name: string;
    readonly id?: string;
    readonly score: number;
    readonly status: string;
}
export interface IUser{
    name: string;
    id?: string;
    score: number;
    status: string;
}