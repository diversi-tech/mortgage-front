export enum Role {
    Admin,
    Customer
}

export interface IUser {
    id: number;
    userName: string;
    password: string;
    email: string;
    role:Role;
    created_at: Date ;
    updated_at: Date ;
}
