
export enum TransactionType {
    New,
    Old,
    Renovation,
    Other,
    PricePerTenant
}
export class DocumentType {
    id?: number;
    transaction_Type?: TransactionType;
    document_name?: string;
    required?: boolean
}  