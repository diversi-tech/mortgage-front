import { Role } from "./user";
export class TokenPayload {
    id?: number;
    userName?: string;
    role?:Role;
  }