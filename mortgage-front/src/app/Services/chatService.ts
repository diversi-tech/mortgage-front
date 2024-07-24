import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import * as signalR from '@microsoft/signalr';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private hubConnection: HubConnection;
  readonly basicUrl=environment
  constructor() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(this.basicUrl+'/chathub')
      .build();

    this.startConnection();
  }

  private startConnection() {
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch((err: string) => console.log('Error while starting connection: ' + err));
  }

  public sendMessage(senderId: number, receiverId: number, message: string) {
    this.hubConnection.invoke('SendMessage', senderId, receiverId, message);
  }

  public onReceiveMessage(callback: (senderId: number, message: string) => void) {
    this.hubConnection.on('ReceiveMessage', callback);
  }
}
