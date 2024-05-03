import { Component } from '@angular/core';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { ChatUsersComponent } from './chat-users/chat-users.component';
import { ChatComponent } from './chat/chat.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeHeaderComponent, ChatUsersComponent, ChatComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
