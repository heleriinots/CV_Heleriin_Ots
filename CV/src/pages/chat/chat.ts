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

  constructor() {
    /*
    if (this.messages.length === 0) {
      this.messages = JSON.parse(localStorage.getItem("messages"));
    }
    */
  }


  parseTime(time) {
    return  moment(time).fromNow();
  }


  eventHandler(keyCode, message) {
    if(keyCode === 13) {
      this.send(message);
    }
  }

  send(message) {
    if (message != '' && message != null) {
      var time = moment();
      this.messages.unshift({author: 'Guest', message: message, class: 'guest', time: time});
      this.generateChatbotMessage();
    }

    console.log(JSON.stringify(this.messages));
    localStorage.setItem("messages", JSON.stringify(this.messages));
    this.chat_input = '';
  }

  generateChatbotMessage() {
    var time = moment();
    this.messages.unshift({author: 'Chatbot', message: this.generateRandomSentence(), class: 'chatbot', time: time});
  }


  verbs = [
    //["go to", "goes to", "going to", "went to", "gone to"],
    //["look at", "looks at", "looking at", "looked at", "looked at"],
    //["choose", "chooses", "choosing", "chose", "chosen"],
    ["like", "likes", "liking", "liked", "liked"],
    ["love", "loves", "loving", "loved", "loved"]
  ];

  tenses = [
    {name:"Present", singular:1, plural:0, format:"%subject %verb %complement"},
    {name:"Past", singular:3, plural:3, format:"%subject %verb %complement"}
    //{name:"Present Continues", singular:2, plural:2, format:"%subject %be %verb %complement"}
    ];

  subjects = [
    {name:"I", be:"am", singular:0},
    {name:"You", be:"are", singular:0}
    //{name:"He", be:"is", singular:1}
    ];

  complementsForVerbs = [
    //["cinema", "Egypt", "home", "concert"],
    //["for a map", "them", "the stars", "the lake"],
    //["a book for reading", "a dvd for tonight"],
    ["php", "java", "this app", "css", "programming", "talking with you", "javascript", "python"],
    ["php", "java", "this app", "css", "programming", "talking with you", "javascript", "python"]];


  random(words) {
    return words[Math.floor(Math.random()*words.length)];
  }


  generateRandomSentence() {

    //Array.prototype.random = function(){return this[Math.floor(Math.random() * this.length)];};

    var index = Math.floor(this.verbs.length * Math.random());
    var tense = this.random(this.tenses);
    var subject = this.random(this.subjects);
    var verb = this.verbs[index];
    var complement = this.complementsForVerbs[index];
    var str = tense.format;
    str = str.replace("%subject", subject.name).replace("%be", subject.be);
    str = str.replace("%verb", verb[subject.singular ? tense.singular : tense.plural]);
    str = str.replace("%complement", this.random(complement));
    console.log(str);
    return str;

  }

}

