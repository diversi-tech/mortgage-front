export enum TransactionType {
    'מחיר למשתכן',
    'חדש',
    'ישן',
    'שיפוץ',
    'אחר'
}
  
export interface IDocumentType {
    id?: number;
    transaction_Type: TransactionType;
    document_Name: string;
    required: boolean;
}  