import { NgClass } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-chatbot',
  imports: [NgClass],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {
  messages = [{sender: 'user', text: 'ola chat'}, {sender: 'bot', text: 'ola user'}]
  teste = 'user'
  sendMessage(){
    if(this.teste === 'user'){
      this.teste = 'bot'
    }else{
      this.teste = 'user'
    }
    this.messages.push({sender: this.teste, text: "teste"});
    
  }
}
