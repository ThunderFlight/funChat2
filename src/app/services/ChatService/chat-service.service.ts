import { v4 as uuidv4 } from 'uuid';
import { Injectable, inject } from '@angular/core';
import {
  AllAuntificatedUsers,
  MessageRequest,
  MessageResponse,
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

  sendMessage(username: string, message: string): Observable<MessageResponse> {
    const bodyData: MessageRequest = {
      id: `${uuidv4()}`,
      type: 'MSG_SEND',
      payload: {
        message: {
          to: username,
          text: message,
        },
      },
    };

    this.websockerService.sendMessage<MessageRequest>(bodyData);
    return this.websockerService.getMessage<MessageResponse>();
  }
}
