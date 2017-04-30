/**
 * Created by Heleriin on 18/03/2017.
 */


import moment from "moment";
import {Component} from "@angular/core";
import {cvDataService} from "../../providers/cv-data-service";
import {NavController, NavParams} from "ionic-angular";
import {CVDetailPage} from "../cv-detail/cv-detail";

@Component({
  selector: 'cv-ionic',
  templateUrl: 'cv.html',
  providers: [cvDataService]
})


export class CVPage {

  selectedItem: any;
  public qualificationsInfo: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public cvDataService: cvDataService) {
    this.selectedItem = navParams.get('item');
    this.loadCVData();
  }


  loadCVData() {
    this.cvDataService.load()
      .then(data => {
        this.qualificationsInfo = data;
      });
  }


  parseDate(datetime) {
    let data = moment().format(datetime);
    return moment(data).format('DD.MM:YYYY hh:mm:ss');
  }


  parseDetailInfo(details) {
    if (details.length >= 28) {
      details = details.substr(0, 28) + "...";
    }
    return details;
  }

  itemTapped(event, item) {
    this.navCtrl.push(CVDetailPage, {
      item: item
    });
  }
}
