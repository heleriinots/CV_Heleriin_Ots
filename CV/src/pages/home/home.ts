import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {PeopleService} from "../../providers/people-service";


@Component({
  selector: 'home-ionic',
  templateUrl: 'home.html',
  providers: [PeopleService]
})

export class HomePage {

  public people: any;

  slideData = [{title: "Slide 1", info: "Additional info 1"}, {title: "Slide 2", info: "Additional info 1"},
    {title: "Slide 3", info: "Additional info 3"}]


  constructor(public navCtrl: NavController, public peopleService: PeopleService) {
    this.loadPeople();
  }


  loadPeople() {
    this.peopleService.load()
      .then(data => {
        this.people = data;
        console.log(this.people);
      });
  }

}
