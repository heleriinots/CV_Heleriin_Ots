import {Component, ViewChild} from "@angular/core";

import {MenuController, Nav, Platform} from "ionic-angular";

import {Splashscreen, StatusBar} from "ionic-native";


import {HomePage} from "../pages/home/home";
import {MotivationLetterPage} from "../pages/motivation-letter/motivation-letter";
import {CVPage} from "../pages/cv/cv";
import {ChatPage} from "../pages/chat/chat";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform,
              public menu: MenuController) {
    this.initializeApp();

    this.pages = [
      {title: 'Home', component: HomePage},
      {title: 'CV', component: CVPage},
      {title: 'Motivation Letter', component: MotivationLetterPage},
      {title: 'Chat', component: ChatPage}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    this.menu.close();
    this.nav.setRoot(page.component);
  }
}
