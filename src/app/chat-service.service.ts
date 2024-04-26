import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChatServiceService {
  constructor() {}
  private url = 'ws://127.0.0.1:4000';
  authenticateUser(login: string, password: string): WebSocket {
    const bodyData = {
      id: '1',
      type: 'USER_LOGIN',
      payload: {
        user: {
          login: login,
          password: password,
        },
      },
    };

    const socket = new WebSocket(this.url);
    socket.onopen = () => {
      socket.send(JSON.stringify(bodyData));
    };
    return socket;
  }
}
