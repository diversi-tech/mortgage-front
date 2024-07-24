// export enum Family_Status {
//      Married,
//      Single,
//      Divorced,
//      Widow
// }
// export enum Job_Status {
//      Employed,
//      SelfEmployed
// }
// export enum TransactionTypeEnum {
//      Deposit,
//      Withdrawal,
// }
// export enum Customer_type{
//      l,c,a
// }

// export enum Connection{
//      Whatup,
//      Email
// }
// export class Customer {
//      id?: number|null;
//      lead_id?: number ;
//      first_Name?: string |null;
//      last_Name?: string |null;
//      email?: string |null;
//      phone?: string|null
//      connection?:Connection |null;
//      t_z?: string |null;
//      lastSynced?: Date |null;
//      isArchived?: boolean |null;
//      created_at?: Date |null;
//      updated_at?: Date|null;
//      birthDate?: Date |null;
//      family_status?: Family_Status|null;
//      number_of_people_in_house?: number|null;
//      address?: string|null;
//      job_status?: Job_Status|null;
//      customer_type?:Customer_Type |null;
//      work_business_name?: string|null;
//      job_description?: string|null;
//      avarage_monthly_salary?: number | null;
//      years_in_current_position?: number|null;
//      income_rent?: number|null
//      income_Government_Endorsement?: number|null
//      income_other?: number|null
//      expenses_rent?: number|null
//      expenses_loans?: number|null
//      expenses_other?: number|null
//      property_city?: string|null
//      transaction_type?: TransactionTypeEnum|null
//      estimated_price_by_customer?: number|null
//      estimated_price_by_sales_agreement?: number|null
//      has_other_properties?: boolean;
//      amount_of_loan_requested?: number|null;
     //[key: string]: any; 
//}




export enum Family_Status {
     Single = 0,
     Married = 1,
     Divorced = 2,
     Widowed = 3
   }
   export enum Job_Status {
       Employed=0,
       SelfEmployed=1,
   }
   export enum TransactionTypeEnum {
       מחיר_למשתכן=0,
       New=1,
       Old=2,
       Renovation=3,
       Other=4
   }
   export enum Connection
   {
       whatup=0,
       email=1
   }
   export enum Customer_Type
   {
       l=0,
       c=1,
       a=2
   }
   export class Customer {
       id?: number;
       lead_id?: number;
       first_Name?: string
       last_Name?: string;
       email?: string
       phone?: string
       connection?: Connection
       t_z?: string;
       lastSynced?: Date;
       isArchived?: boolean;
       created_at?: Date;
       updated_at?: Date;
       birthDate?: Date;
       family_status?: Family_Status;
       number_of_people_in_house?: number;
       address?: string;
       job_status?: Job_Status;
       customer_type?:number;
       work_business_name?: string;
       job_description?: string;
       avarage_monthly_salary?: number;
       years_in_current_position?: number;
       income_rent?: number
       income_Government_Endorsement?: number
       income_other?: number
       expenses_rent?: number
       expenses_loans?: number
       expenses_other?: number
       property_city?: string
       transaction_type?: TransactionTypeEnum
       estimated_price_by_customer?: number
       estimated_price_by_sales_agreement?: number
       has_other_properties?: boolean;
       amount_of_loan_requested?: number
    // customer_type: number | undefined;
   }