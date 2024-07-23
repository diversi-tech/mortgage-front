import { Role } from "./User";
export class ITokenPayload {
    id?: number;
    userName?: string;
    role?:Role;
    customerId?:number;
  }