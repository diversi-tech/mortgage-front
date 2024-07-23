export enum Role {
    None=-1,
    Admin,
    Customer
}
export class IUser {
    id?: number;
    userName?: string;
    password?: string;
    email?: string;
    role?:Role;
    created_at?: Date ;
    updated_at?: Date ;
}
