export enum TransactionType {
  'חדש',
  'ישן',
 'שיפוץ',
  'אַחֵר',
  'מחיר למשתכן'
}
  
export class DocumentType {
    id?: number;
    transaction_Type?: TransactionType;
    document_Name?: string;
    required?: boolean
}  