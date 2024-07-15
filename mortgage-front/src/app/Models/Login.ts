import { Role } from "./User";


export class TokenPayload {
    id?: number;
    userName?: string;
    role?:Role;
  }