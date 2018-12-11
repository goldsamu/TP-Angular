import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Message } from '../models/message';

@Component({
  selector: 'app-chat-formulaire',
  templateUrl: './chat-formulaire.component.html',
  styleUrls: ['./chat-formulaire.component.scss']
})
export class ChatFormulaireComponent implements OnInit {

  public texte: string;
  @Output() nouveauMessage: EventEmitter<Message>;

  constructor() {
    this.nouveauMessage = new EventEmitter<Message>();
  }
  ngOnInit() {
    this.texte = '';
  }
  public envoyer(): void {
    const message = new Message();
    message.auteur = 'toto';
    message.date = new Date();
    message.texte = this.texte;

    this.nouveauMessage.emit(message);
  }


}
