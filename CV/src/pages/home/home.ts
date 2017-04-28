import {Component} from "@angular/core";

@Component({
  selector: 'home-ionic',
  templateUrl: 'home.html'
})

export class HomePage {

  slideData = [{title: "Slide 1", info: "Additional info 1"}, {title: "Slide 2", info: "Additional info 1"},
    {title: "Slide 3", info: "Additional info 3"}]


  constructor() {
  }

}
