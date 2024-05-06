import { WebSocketSubject, webSocket } from 'rxjs/webSocket';
import { v4 as uuidv4 } from 'uuid';
import { Injectable, inject } from '@angular/core';
import {
  AllAuntificatedUsers,
  UserLoginRequest,
  UserLoginResponse,
} from '../../model/store';
import { AutheticationUser } from '../../model/userAunthetication';
import { WebSocketService } from '../WebSocketService/web-socket.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatServiceService {
  private readonly websockerService = inject(WebSocketService);
  private readonly url = 'ws://127.0.0.1:4000';

  authenticateUser(
    login: string,
    password: string,
  ): Observable<AutheticationUser<UserLoginResponse>> {
    const bodyData = {
      id: uuidv4(),
      type: 'USER_LOGIN',
      payload: {
        user: {
          login: login,
          password: password,
        },
      },
    };

    this.websockerService.sendMessage<AutheticationUser<UserLoginRequest>>(
      bodyData,
    );

    return this.websockerService.getMessage<
      AutheticationUser<UserLoginResponse>
    >();
  }

  getAllUsers(): Observable<
    AutheticationUser<AllAuntificatedUsers | UserLoginResponse>
  > {
    const bodyData = {
      id: uuidv4(),
      type: 'USER_ACTIVE',
      payload: null,
    };
    this.websockerService.sendMessage<AutheticationUser<null>>(bodyData);
    return this.websockerService.getMessage<
      AutheticationUser<AllAuntificatedUsers>
    >();
  }
}
