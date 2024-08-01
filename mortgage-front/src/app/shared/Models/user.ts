 export enum Role {
    None=-1,
    Admin=0,
    Customer=1
}

export interface IUser {
    id?: number;
    userName: string;
    password: string;
    email: string;
    role:Role;
    created_at: Date ;
    updated_at: Date ;
}
