import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './chat.component';
import { ChatAffichageComponent } from './chat-affichage/chat-affichage.component';
import { ChatElementComponent } from './chat-element/chat-element.component';
import { ChatFormulaireComponent } from './chat-formulaire/chat-formulaire.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule
    ],
    declarations: [
        ChatComponent,
        ChatAffichageComponent,
        ChatElementComponent,
        ChatFormulaireComponent
    ],
    exports: [
        ChatComponent, ChatAffichageComponent, ChatElementComponent,
        ChatFormulaireComponent
    ]
})
export class ChatModule { }
