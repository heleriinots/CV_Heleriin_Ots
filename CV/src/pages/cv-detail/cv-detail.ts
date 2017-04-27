/**
 * Created by Heleriin on 17/04/2017.
 */


import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";

@Component({
  selector: 'cv-item-detail',
  templateUrl: 'cv-detail.html'
})


export class CVDetailPage {

  selectedItem: any;
  lines = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');
    this.formatText(this.selectedItem.details);
  }


  formatText(text) {
    this.lines = text.split("\n");
  }
}

