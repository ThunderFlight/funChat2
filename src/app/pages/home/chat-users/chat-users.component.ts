import { Component, OnInit, inject } from '@angular/core';
import { UserComponent } from '../../../user/user.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User, UserLoginResponse } from '../../../model/store';
import { ChatServiceService } from '../../../services/ChatService/chat-service.service';
import { usersActions } from '../../../user.action';

@Component({
  selector: 'app-chat-users',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './chat-users.component.html',
  styleUrl: './chat-users.component.scss',
})
export class ChatUsersComponent implements OnInit {
  private authenticationService = inject(ChatServiceService);

  private store: Store<{ users: UserLoginResponse[] }> = inject(Store);
  users$: Observable<UserLoginResponse[]> = this.store.select('users');
  protected users: User[] = [];

  ngOnInit(): void {
    this.authenticationService.getAllUsers().subscribe({
      next: (event) => {
        console.log(event);

        if ('users' in event.payload) {
          this.users = event?.payload.users;
          console.log(this.users);
          this.authenticationService.getAllUsers().subscribe((event) => {
            console.log(event);
          });
        } else {
          this.users.push(event.payload.user);
        }
      },
    });
  }
  public async onSubmit(): Promise<void> {}
}
