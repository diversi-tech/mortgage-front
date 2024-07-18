
export enum TransactionType {
    'מחיר למשתכן',
    'חדש',
    'ישן',
    'שיפוץ',
    'אחר'
}
export class DocumentType {
    id?: number;
    transaction_Type?: TransactionType;
    document_name?: string;
    required?: boolean
}  