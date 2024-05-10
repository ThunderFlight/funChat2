import { Component } from '@angular/core';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { ChatUsersListComponent } from './chat-users-list/chat-users-list.component';
import { ChatComponent } from './chat/chat.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeHeaderComponent, ChatUsersListComponent, ChatComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
