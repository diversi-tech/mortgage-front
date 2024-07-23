export enum Family_Status {
     Married,
     Single,
     Divorced,
     Widow
}
export enum Job_Status {
     Employed,
     SelfEmployed
}
export enum TransactionTypeEnum {
     Deposit,
     Withdrawal,
}
export enum Customer_type{
     l,c,a
}
export class ICustomer {
     id!: number;
     lead_id?: number;
     last_Name?: string;
     user_id?:number;
     first_Name?: string;
     customer_type?:Customer_type;
     phone?: string
     email?: string
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
     work_business_name?: string;
     job_description?: string;
     abstractvarage_monthly_salary?: number;
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
     amount_of_loan_requested?: number;
     [key: string]: any; 
}