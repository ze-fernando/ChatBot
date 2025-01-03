import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ChatbotService } from '../../services/chatbot.service';
import { marked } from 'marked';
import { FormsModule } from '@angular/forms';


interface Imessage {
  sender: 'user' | 'bot',
  text: any
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
  isBotTyping: boolean = false;

  constructor(private service: ChatbotService){}
  sendMessage(){
    if(this.userInput.trim()){
      this.messages.push({sender: 'user', text: this.userInput})
      this.isBotTyping = true;

      this.service.AskToIA(this.userInput).subscribe(r => {
        this.isBotTyping = false; 
        this.messages.push({ 
          sender: 'bot', 
          text: r.data || 'Desculpe, não entendi.' 
        })
      })
    }
    this.userInput = '';
  }

  renderMarkdown(text: any): any {
    return marked(text); 
  }
}
