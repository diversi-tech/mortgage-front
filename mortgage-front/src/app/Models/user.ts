export interface IUser {
    userName: string;
    id: number;
    password:number;
    email:string;
    role:0|1;
    createdAt:Date;
    updatedAt:Date;
}
