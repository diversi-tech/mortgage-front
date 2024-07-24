// export enum TransactionType {
//     'מחיר למשתכן',
//     'חדש',
//     'ישן',
//     'שיפוץ',
//     'אחר'
// }
  
// export class DocumentType {
//     id?: number;
//     transaction_Type?: TransactionType;
//     document_Name?: string;
//     required?: boolean
// }  


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
     document_Name?: string;
     required?: boolean
 }  
 //לבדוק את מי צריך
 export enum TransactionTypeEnum {
     מחיר_למשתכן=0,
     New=1,
     Old=2,
     Renovation=3,
     Other=4
 }
 