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
  Other,
  Renovation,
  Old,
  New
}
export enum Customer_type{
    l,c,a
}
export enum Connection{
    Whatup,
    Email
}
export class Customer {
    id?: number|null;
    lead_id?: number ;
    last_Name?: string |null;
    first_Name?: string |null;
    customer_type?:Customer_type |null;
    phone?: string|null
    connection?:Connection |null;
    email?: string |null;
    t_z?: string |null;
    lastSynced?: Date |null;
    isArchived?: boolean |null;
    created_at?: Date |null;
    updated_at?: Date|null;
    birthDate?: Date |null;
    family_status?: Family_Status|null;
    number_of_people_in_house?: number|null;
    address?: string|null;
    job_status?: Job_Status|null;
    work_business_name?: string|null;
    job_description?: string|null;
    abstractvarage_monthly_salary?: number|null;
    years_in_current_position?: number|null;
    income_rent?: number|null
    income_Government_Endorsement?: number|null
    income_other?: number|null
    expenses_rent?: number|null
    expenses_loans?: number|null
    expenses_other?: number|null
    property_city?: string|null
    transaction_type?: TransactionTypeEnum|null
    estimated_price_by_customer?: number|null
    estimated_price_by_sales_agreement?: number|null
    has_other_properties?: boolean;
    amount_of_loan_requested?: number|null;
    [key: string]: any;
}