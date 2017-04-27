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
    if (this.messages.length === 0) {
      this.messages = JSON.parse(localStorage.getItem("messages"));
      this.generateRandomSentence();
    }
  }

  eventHandler(keyCode, message) {
    if(keyCode === 13) {
      this.send(message);
    }
  }

  send(message) {
    if (message != '' && message != null) {
      var time = moment().format('DD.MM:YYYY hh:mm:ss')
      this.messages.unshift({author: 'Guest', message: message, class: 'guest', time: time});
      this.generateChatbotMessage();
    }

    console.log(JSON.stringify(this.messages));
    localStorage.setItem("messages", JSON.stringify(this.messages));
    this.chat_input = '';
  }

  generateChatbotMessage() {
    var time = moment().format('DD.MM:YYYY hh:mm:ss')
    this.messages.unshift({author: 'Chatbot', message: 'blah', class: 'chatbot', time: time});
  }


  verbs = [["go to", "goes to", "going to", "went to", "gone to"],
    ["look at", "looks at", "looking at", "looked at", "looked at"],
    ["choose", "chooses", "choosing", "chose", "chosen"]];

  tenses = [{name:"Present", singular:1, plural:0, format:"%subject %verb %complement"},
    {name:"Past", singular:3, plural:3, format:"%subject %verb %complement"},
    {name:"Present Continues", singular:2, plural:2, format:"%subject %be %verb %complement"}];

  subjects = [{name:"I", be:"am", singular:0},
    {name:"You", be:"are", singular:0},
    {name:"He", be:"is", singular:1}];

  complementsForVerbs = [["cinema", "Egypt", "home", "concert"],
    ["for a map", "them", "the stars", "the lake"],
    ["a book for reading", "a dvd for tonight"]];


  random(words) {
    return words[Math.floor(Math.random()*words.length)];
  }

  //lisa id värk dictionary'sse ja tee sellest json


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

