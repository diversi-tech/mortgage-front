import { Role } from "./user";




export interface ITokenPayload {
  id: number;
  userName: string;
  role: Role;
  customerId: number;

}
