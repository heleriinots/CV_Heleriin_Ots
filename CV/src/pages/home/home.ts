import {Component} from "@angular/core";

@Component({
  selector: 'home-ionic',
  templateUrl: 'home.html'
})

export class HomePage {

  slideData = [
    {title: "Welcome to the CV app", info: "Additional info"},
    {title: "Explore the possibilities", info: "Additional info"},
    {title: "Get acquainted with the CV", info: "Additional info"},
    {title: "Have a chat with the Chatbot", info: "Additional info"},
    {title: "Read the motivation letter", info: "Additional info"}
  ];


  constructor() {
  }

}
