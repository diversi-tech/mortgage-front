
export enum TransactionType {
   ' חדש',
   ' ישן',
   ' שיפוץ',
   ' אחר',
    'מחיר למשתכן'
}
export class DocumentType {
    id?: number;
    transaction_Type?: TransactionType;
    document_name?: string;
    required?: boolean
}  