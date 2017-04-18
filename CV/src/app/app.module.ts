import {ErrorHandler, NgModule} from "@angular/core";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";
import {MyApp} from "./app.component";
import {HomePage} from "../pages/home/home";
import {MotivationLetterPage} from "../pages/motivation-letter/motivation-letter";
import {CVPage} from "../pages/cv/cv";
import {ChatPage} from "../pages/chat/chat";
import {CVDetailPage} from "../pages/cv-detail/cv-detail";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CVPage,
    CVDetailPage,
    MotivationLetterPage,
    ChatPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CVPage,
    CVDetailPage,
    MotivationLetterPage,
    ChatPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {
}
