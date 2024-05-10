import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { usersActions } from '../user.action';
import { exhaustMap, map } from 'rxjs';
import { ChatServiceService } from '../services/ChatService/chat-service.service';
import { User } from '../model/store';

@Injectable()
export class UsersEffects {
  private readonly chatService = inject(ChatServiceService);
  private readonly actions$ = inject(Actions);

  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.getUsers),
      exhaustMap(() =>
        this.chatService
          .getAllUsers()
          .pipe(
            map((user) =>
              usersActions.addUsersSuccess({ users: user.payload }),
            ),
          ),
      ),
    ),
  );
}
