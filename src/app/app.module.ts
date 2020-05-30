import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QabrQuestionsPage } from '../pages/qabr-questions/qabr-questions';
import { TabsPage } from '../pages/tabs/tabs';
import { CommandsPage } from '../pages/commands/commands';
import { VideosPage } from '../pages/videos/videos';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    QabrQuestionsPage,
    TabsPage,
    CommandsPage,
    VideosPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    QabrQuestionsPage,
    TabsPage,
    CommandsPage,
    VideosPage
  ],
  providers: [
    StatusBar,
    YoutubeVideoPlayer,

    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
