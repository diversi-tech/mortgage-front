export interface INotification {
    [x: string]: any;
    id: number;
    userId: number;
    message: string;
    isRead: boolean;
    created_at: Date;
}
