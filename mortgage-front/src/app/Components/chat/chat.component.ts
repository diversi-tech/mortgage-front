import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chatService';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: { senderId: number, message: string }[] = [];
  newMessage: string = '';
  senderId: number = 1; // ID של הלקוח
  receiverId: number = 1; // ID של המנהל

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.onReceiveMessage((senderId, message) => {
      this.messages.push({ senderId, message });
    });
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.chatService.sendMessage(this.senderId, this.receiverId, this.newMessage);
      this.newMessage = ''; // לנקות את תיבת הטקסט
    }
  }
}
