/**
 * Created by Heleriin on 04/04/2017.
 */

import {Component} from "@angular/core";
import { NavController } from 'ionic-angular';
import * as io from 'socket.io-client';



@Component({
  selector: 'chat-ionic',
  templateUrl: 'chat.html'
})

export class ChatPage {

  chat_input: string;
  messages = []

  constructor() {
    if (this.messages.length === 0) {
      console.log(localStorage.getItem("messages"));
      this.messages = JSON.parse(localStorage.getItem("messages"));
    }
  }

  send(message) {
    if(message != ''){
      this.messages.push({author: 'Guest', message : message});
      this.generateChatbotMessage();
    }

    console.log(JSON.stringify(this.messages));
    localStorage.setItem("messages", JSON.stringify(this.messages));

    //var another_variable=localStorage.getItem("storage_name");

    this.chat_input = '';
  }

  generateChatbotMessage() {
    this.messages.push({author: 'Chatbot', message : 'blah'});
  }

}

