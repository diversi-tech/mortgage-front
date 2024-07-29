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
    ' חדש'=0,
    ' ישן'=1,
    ' שיפוץ'=2,
    ' אחר'=3,
     'מחיר למשתכן'=4
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
 