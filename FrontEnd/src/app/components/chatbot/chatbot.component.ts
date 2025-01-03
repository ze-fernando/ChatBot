import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ChatbotService } from '../../services/chatbot.service';
import { FormsModule } from '@angular/forms';


interface Imessage {
  sender: 'user' | 'bot',
  text: string
}

@Component({
  selector: 'app-chatbot',
  imports: [NgClass, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {
  messages: Array<Imessage> = []
  userInput: string = "";

  constructor(private service: ChatbotService){}
  sendMessage(){
    if(this.userInput.trim()){
      this.messages.push({sender: 'user', text: this.userInput})
  
      this.service.AskToIA(this.userInput).subscribe(r => this.messages.push({ sender: 'bot', text: r.data ||  'Desculpe, não entendi.' }))
    }
    this.userInput = '';
  }
}
