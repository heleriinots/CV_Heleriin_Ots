import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { HomePage } from '../pages/home/home';
import { MotivationLetterPage } from '../pages/motivation-letter/motivation-letter';
import { CVPage } from '../pages/cv/cv';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CVPage,
    MotivationLetterPage,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CVPage,
    MotivationLetterPage,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
