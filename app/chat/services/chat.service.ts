import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/message';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public messages: Array<Message>;
  constructor(private http: HttpClient) {
    this.messages = new Array<Message>();
  }

  public buildMessages(resultats: Array<any>): Array<Message> {
    const messages = [];
    if (resultats != null) {
      for (const result of resultats) {
        const message = new Message(result);
        messages.push(message);
      }
    }
    return messages;
  }
  public getMessages(): Observable<Array<Message>> {
    return new Observable<Array<Message>>((observer) => {
      this.http.get<Array<any>>('https://jsonplaceholder.typicode.com/posts')
        .subscribe(
          (messages) => {
            this.messages = this.buildMessages(messages);
            observer.next(this.messages);
          },
          (error) => observer.error(error),
          () => observer.complete()
        );
    });
  }

  public addMessage(message: Message): Array<Message> {
    console.log(message);
    this.messages.push(message);
    return this.messages;
  }
}
