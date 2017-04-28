/**
 * Created by Heleriin on 04/04/2017.
 */

import {Component} from "@angular/core";
import moment from "moment";


@Component({
  selector: 'chat-ionic',
  templateUrl: 'chat.html'
})

export class ChatPage {

  chat_input: string;
  messages = [];
  count = 0;

  constructor() {
    if (this.messages.length === 0) {
      //this.messages = JSON.parse(localStorage.getItem("messages"));
      if (this.messages.length == 0) {
        this.startChat();
      }
    }
  }

  startChat() {
    let time = moment();
    this.messages.unshift({author: 'Chatbot', message: "Hello, what's your name?", class: 'chatbot', time: time});
  }

  eventHandler(keyCode, message) {
    if (keyCode === 13) {
      this.send(message);
    }
  }

  sendMessageOne(message) {
    this.messages.unshift({
      author: 'Guest',
      message: message,
      class: 'guest',
      time: moment()
    });

    this.messages.unshift({
      author: 'Chatbot',
      message: "Hi, " + message + "! My name is Chatbot!",
      class: 'chatbot',
      time: moment()
    });

    this.messages.unshift({
      author: 'Chatbot',
      message: "I really like programming, how about you?",
      class: 'chatbot',
      time: moment()
    });
    this.count++;
  }

  sendMessageTwo(message) {
    this.messages.unshift({
      author: 'Guest',
      message: message,
      class: 'guest',
      time: moment()
    });

    this.messages.unshift({
      author: 'Chatbot',
      message: "Oh, how interesting...",
      class: 'chatbot',
      time: moment()
    });

    this.messages.unshift({
      author: 'Chatbot',
      message: "What's the weather like?",
      class: 'chatbot',
      time: moment()
    });

    this.count++;
  }

  sendMessageThree(message) {
    this.messages.unshift({
      author: 'Guest',
      message: message,
      class: 'guest',
      time: moment()
    });

    this.messages.unshift({
      author: 'Chatbot',
      message: "I don't get outdoors much, it's hard to tell that the weather is " + message,
      class: 'chatbot',
      time: moment()
    });

    this.messages.unshift({
      author: 'Chatbot',
      message: "I hope you like this app!",
      class: 'chatbot',
      time: moment()
    });

    this.count++;
  }


  send(message) {
    if (message != '' && message != null) {

      if (this.count === 0) {
        this.sendMessageOne(message);
      } else if (this.count === 1) {
        this.sendMessageTwo(message);
      } else if (this.count === 2) {
        this.sendMessageThree(message);
      } else {

        this.messages.unshift({author: 'Guest', message: message, class: 'guest', time: moment()});
        this.generateChatbotMessage();
      }
    }

    localStorage.setItem("messages", JSON.stringify(this.messages));
    this.chat_input = '';
  }


  formatTime(time) {
    return moment(time).fromNow();
  }


  generateChatbotMessage() {
    let time = moment();
    this.messages.unshift({author: 'Chatbot', message: this.generateRandomSentence(), class: 'chatbot', time: time});
  }


  ///FIX THIS!!!!!!


  verbs = [
    //["go to", "goes to", "going to", "went to", "gone to"],
    //["look at", "looks at", "looking at", "looked at", "looked at"],
    //["choose", "chooses", "choosing", "chose", "chosen"],
    ["like", "likes", "liking", "liked", "liked"],
    ["program", "programs", "programming", "programmed", "programmed"],
    ["look", "looks", "looking", "looked", "looked"]
  ];

  tenses = [
    {name: "Present", singular: 1, plural: 0, format: " %subject %verb %complement"}
  ];

  subjects = [
    {name: "I", be: "am", singular: 0},
    {name: "You", be: "are", singular: 0},
    {name: "We", be: "are", singular: 0}
  ];

  complementsForVerbs = [
    ["php", "java", "this app", "css", "node.js", "talking with you", "javascript", "python", "bash", "html"],
    ["a website", "with this new computer"],
    ["at this code", "at this cool design"]
  ];


  random(words) {
    return words[Math.floor(Math.random() * words.length)];
  }


  generateRandomSentence() {


    let index = Math.floor(this.verbs.length * Math.random());
    let tense = this.random(this.tenses);
    let subject = this.random(this.subjects);
    let verb = this.verbs[index];
    let complement = this.complementsForVerbs[index];
    let str = tense.format;
    str = str.replace("%subject", subject.name).replace("%be", subject.be);
    str = str.replace("%verb", verb[subject.singular ? tense.singular : tense.plural]);
    str = str.replace("%complement", this.random(complement));
    console.log(str);
    return str;

  }

}

