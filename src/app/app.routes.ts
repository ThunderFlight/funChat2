import { Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ChatHomeComponent } from './pages/chat-home/chat-home.component';

export const routes: Routes = [
  { path: '', component: AuthenticationComponent, title: 'Aunthentication' },
  { path: 'home/', component: ChatHomeComponent, title: 'Main Page' },
];
