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
  count;
  verbs = [
    ["like", "likes", "liking", "liked", "liked"],
    ["look at", "looks at", "looking at", "looked at", "looked at"],
    ["write", "writes", "writing", "wrote", "written"],
    ["think about ", "thinks about ", "thinking about ", "thought about ", "thought about"]
  ];
  tenses =
    [
      {name: "Present", singular: 1, plural: 0, format: "%subject %verb %complement"},
      {name: "Past", singular: 3, plural: 3, format: "%subject %verb %complement"},
      {name: "Present Continues", singular: 2, plural: 2, format: "%subject %be %verb %complement"}
    ];
  subjects = [
    {name: "I", be: "am", singular: 0},
    {name: "You", be: "are", singular: 0},
    {name: "Heleriin", be: "is", singular: 1},
    {name: "We", be: "are", singular: 0}
  ];
  complementsForVerbs = [
    ["php", "sql", "java", "this app", "css", "node.js", "talking with you", "javascript", "python", "html", "angular",
      "javascript", "c++"],
    ["this awesome website!", "the unique design of this app!", "the time, " + moment().format('hh:mm a'),
      "the flying cars in the sky!"],
    ["many lines of code", "essays about the internet of things", "thought provoking books", "clean code", "some" +
    " weird messages"],
    ["the inner workings of the universe", "improving useful skills, such as coding", "fixing bugs", "the next big" +
    " IT trend"]
  ];

  constructor() {
    if (this.messages.length === 0) {
      this.messages = JSON.parse(localStorage.getItem("messages"));
      if (this.messages.length == 0) {
        this.count = 0;
        this.startChat();
      }
    }
  }


  startChat() {
    let time = moment();
    this.messages.unshift({author: 'Chatbot', message: "Hello, what's your name?", style: 'chatbot', time: time});
  }

  eventHandler(keyCode, message) {
    if (keyCode === 13) {
      this.send(message);
    }
  }

  sendMessageOne(message) {
    this.sleep(100);
    this.messages.unshift({
      author: 'Guest',
      message: message,
      style: 'guest',
      time: moment()
    });

    this.messages.unshift({
      author: 'Chatbot',
      message: "Hi, " + message + "! My name is Chatbot!",
      style: 'chatbot',
      time: moment()
    });

    this.messages.unshift({
      author: 'Chatbot',
      message: "I really like programming, how about you?",
      style: 'chatbot',
      time: moment()
    });
    this.count++;
  }

  sendMessageTwo(message) {
    this.sleep(100);
    this.messages.unshift({
      author: 'Guest',
      message: message,
      style: 'guest',
      time: moment()
    });

    this.messages.unshift({
      author: 'Chatbot',
      message: "Oh, how interesting...",
      style: 'chatbot',
      time: moment()
    });

    this.messages.unshift({
      author: 'Chatbot',
      message: "What's the weather like?",
      style: 'chatbot',
      time: moment()
    });

    this.count++;
  }

  sendMessageThree(message) {
    this.sleep(100);
    this.messages.unshift({
      author: 'Guest',
      message: message,
      style: 'guest',
      time: moment()
    });

    this.messages.unshift({
      author: 'Chatbot',
      message: "I don't get outdoors much, it's hard to tell that the weather is " + message,
      style: 'chatbot',
      time: moment()
    });

    this.messages.unshift({
      author: 'Chatbot',
      message: "I hope you like this app!",
      style: 'chatbot',
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

        this.messages.unshift({author: 'Guest', message: message, style: 'guest', time: moment()});
        this.generateChatbotMessage();
      }
    }

    localStorage.setItem("messages", JSON.stringify(this.messages));
    this.chat_input = '';
  }


  formatTime(time) {
    return moment(time).fromNow();
  }


  sleep(milliseconds) {
    let start = new Date().getTime();
    for (let i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }


  generateChatbotMessage() {
    let time = moment();
    this.sleep(100);
    this.messages.unshift({author: 'Chatbot', message: this.generateRandomSentence(), style: 'chatbot', time: time});
  }


  random(words) {
    return words[Math.floor(Math.random() * words.length)];
  }


  generateRandomSentence() {
    let index = Math.floor(this.verbs.length * Math.random());
    let tense = this.random(this.tenses);
    let subject = this.random(this.subjects);
    let verb = this.verbs[index];
    let complement = this.complementsForVerbs[index];

    let message = tense.format;
    message = message.replace("%subject", subject.name).replace("%be", subject.be);
    message = message.replace("%verb", verb[subject.singular ? tense.singular : tense.plural]);
    message = message.replace("%complement", this.random(complement));
    return message;
  }

}

