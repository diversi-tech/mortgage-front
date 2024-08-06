import { Role } from "../Models/user";
export interface ITokenPayload {
  id: number;
  userName: string;
  role: Role;
  customerId: number;
}
