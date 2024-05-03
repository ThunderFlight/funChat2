import { Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: AuthenticationComponent, title: 'Aunthentication' },
  { path: 'home/', component: HomeComponent, title: 'Main Page' },
];
