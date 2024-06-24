// export interface ICustomer
// {
//      id:number,
//      first_name:string;
//      last_name:string;
//      phone:string;
//      email:string;
//      address:string;
// }
import { Data } from "@angular/router";
export class Customer
{
     Id?:number;
     First_Name?:string;
     Last_Name?:string;
     Phone?  :string;
     Email?:string;
     Address?:string;
     LastSynced?:Date;
     IsArchived?:boolean;
     created_at?:Data;
     updated_at?:Date;
}