import { Component } from '@angular/core';
import { MessageFormComponent } from './message-form/message-form.component';
import { UsersMessagesComponent } from './users-messages/users-messages.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [MessageFormComponent, UsersMessagesComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {}
