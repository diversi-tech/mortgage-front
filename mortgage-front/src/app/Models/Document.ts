export enum Status {
    pending,
    completed 
}
export class Document {

    id: number;
    customer_Id: number;
    task_description: string;
    document_type_id: number;
    document_path?: string;
    status: Status;
    due_date: Date;
    created_at: Date;
    updated_at: Date;


    constructor(id: number, customer_Id: number, task_description: string, document_type_id: number, document_path: string,
        status: number, due_date: Date, created_at: Date, updated_at: Date) 
    {
        this.id = id;
        this.customer_Id = customer_Id;
        this.task_description = task_description;
        this.document_type_id = document_type_id;
        this.document_path = document_path !== undefined ? document_path : '';
        this.status = status;
        this.due_date = due_date;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }


}

