import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebSocketSubject, webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private socket$: WebSocketSubject<any>;

  constructor() {
    this.socket$ = webSocket('ws://127.0.0.1:4000');
  }

  public sendMessage<T>(message: T): void {
    this.socket$.next(message);
  }

  public getMessage<T>(): Observable<T> {
    return this.socket$.asObservable();
  }
}
