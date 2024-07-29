import { Role } from "./User";
export interface ITokenPayload {
  id: number;
  userName: string;
  role: Role;
  customerId: number;

}
