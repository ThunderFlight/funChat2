import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User, UserLoginResponse } from '../../../model/store';
import { ChatServiceService } from '../../../services/ChatService/chat-service.service';
import { usersActions } from '../../../user.action';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-chat-users',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './chat-users-list.component.html',
  styleUrl: './chat-users-list.component.scss',
})
export class ChatUsersListComponent implements OnInit {
  private authenticationService = inject(ChatServiceService);

  private store: Store<{ users: UserLoginResponse[] }> = inject(Store);
  users$: Observable<UserLoginResponse[]> = this.store.select('users');
  protected users: User[] = [];

  ngOnInit(): void {
    this.authenticationService.getAllUsers().subscribe({
      next: (event) => {
        console.log(event);
        if ('users' in event.payload) {
          console.log(event.payload.users);
          this.users = event?.payload.users;
          usersActions.addUsers(event.payload);
          console.log(usersActions.getUsers());
          return;
        } else {
          this.users.push(event.payload.user);
          console.log(usersActions.addUsers({ users: this.users }));

          console.log(usersActions.getUsers());
        }
      },
    });
  }
  public async onSubmit(): Promise<void> {}
}
