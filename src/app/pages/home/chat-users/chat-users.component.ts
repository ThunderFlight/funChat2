import { Component, OnInit, inject } from '@angular/core';
import { UserComponent } from '../../../user/user.component';
import { ChatServiceService } from '../../../chat-service.service';
import { Store } from '@ngrx/store';
import { addUsers } from '../../../user.action';
import { Observable } from 'rxjs';
import { User } from '../../../model/store';

@Component({
  selector: 'app-chat-users',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './chat-users.component.html',
  styleUrl: './chat-users.component.scss',
})
export class ChatUsersComponent implements OnInit {
  private authenticationService = inject(ChatServiceService);

  private store: Store<{ users: User[] }> = inject(Store);
  users$: Observable<User[]> = this.store.select('users');
  protected users: User[] = [];
  ngOnInit(): void {
    this.authenticationService.getAllUsers().subscribe({
      next: (event) => {
        console.log(event);

        if (event.payload.users) {
          this.store.dispatch(
            addUsers.addUsers({ users: event.payload.users }),
          );
        }
        addUsers.addUsers({ users: event.payload.users });

        console.log(event);

        this.users = event.payload.users;
      },
    });
  }
  public async onSubmit(): Promise<void> {}
}
