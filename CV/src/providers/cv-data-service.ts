/**
 * Created by Heleriin on 16/04/2017.
 */


import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";


@Injectable()
export class cvDataService {

  qualificationsInfo: any;


  constructor(public http: Http) {
  }


  load() {
    if (this.qualificationsInfo) {
      return Promise.resolve(this.qualificationsInfo);
    }

    return new Promise((resolve) => {

      this.http.get('http://188.166.164.8:8800/')
      //this.http.get('http://localhost:8800')

        .map(res => {
          console.log(res);
          return res.json()
        })
        .subscribe(data => {
          this.qualificationsInfo = data.qualificationsData;
          console.log(this.qualificationsInfo);
          resolve(this.qualificationsInfo);
        });

    });

  }

}
