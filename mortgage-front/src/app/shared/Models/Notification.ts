export interface INotification {
    id: number;
    userId: number;
    message: string;
    isRead: boolean;
    created_at: Date;
}
