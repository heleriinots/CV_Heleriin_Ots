import {Component} from "@angular/core";

@Component({
  selector: 'home-ionic',
  templateUrl: 'home.html'
})

export class HomePage {

  slideData = [
    {title: "Welcome to the CV app"},
    {title: "Explore the possibilities"},
    {title: "Get acquainted with the CV"},
    {title: "Have a chat with the Chatbot"},
    {title: "Read the motivation letter"}
  ];


  constructor() {
  }

}
