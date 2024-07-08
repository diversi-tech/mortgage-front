
export enum TransactionType {
    PricePerTenant,
    New,
    Old,
    Renovation,
    Other
}
export class DocumentType {
    id?: number;
    transaction_Type?: TransactionType;
    document_name?: string;
    required?: boolean
}  