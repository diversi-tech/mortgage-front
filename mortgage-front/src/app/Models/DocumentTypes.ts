export enum TransactionType {
   ' חדש',
   ' ישן',
   ' שיפוץ',
   ' אחר',
    'מחיר למשתכן'
}
  
export class IDocumentType {
    id?: number;
    transaction_Type?: TransactionType;
    document_Name!: string;
    required?: boolean
}  