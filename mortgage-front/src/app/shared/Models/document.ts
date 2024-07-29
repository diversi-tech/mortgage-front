export enum Status {
    "בחר מסמך",
    "ממתין לשליחה",
    "הושלם" 
}
export interface IDocument {
    id: number;
    id2:number;
    customer_Id: number;
    task_description: string;
    document_type_id: number;
    document_path?: string;
    document_path2?: string;

    status: Status;
    due_date: Date;
    created_at: Date;
    updated_at: Date;
    isOk:boolean;

 

}

