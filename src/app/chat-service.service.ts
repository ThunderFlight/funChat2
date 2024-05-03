import { WebSocketSubject, webSocket } from 'rxjs/webSocket';
import { Injectable } from '@angular/core';
import { User } from './model/store';

@Injectable({
  providedIn: 'root',
})
export class ChatServiceService {
  private url = 'ws://127.0.0.1:4000';
  private socket = webSocket(this.url);

  authenticateUser(login: string, password: string): WebSocketSubject<any> {
    const bodyData = {
      id: '2',
      type: 'USER_LOGIN',
      payload: {
        user: {
          login: login,
          password: password,
        },
      },
    };

    this.socket.next(bodyData);

    return this.socket;
  }

  getAllUsers(): WebSocketSubject<any> {
    const bodyData = {
      id: '1',
      type: 'USER_ACTIVE',
      payload: null,
    };
    this.socket.next(bodyData);
    return this.socket;
  }
}
