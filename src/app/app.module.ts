import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SubjectPage } from '../pages/subject/subject';
import { ChapterPage } from '../pages/chapter/chapter';
import { TestListPage } from '../pages/test-list/test-list';
import { PreTestPage } from '../pages/pre-test/pre-test';
import { PostTestPage } from '../pages/post-test/post-test';
import { ProjectPage } from '../pages/project/project';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { config } from './../firebase_cfg/firebase.config';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { InfoDataProvider } from '../providers/info-data/info-data';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SubjectPage,
    ChapterPage,
    TestListPage,
    PreTestPage,
    PostTestPage,
    ProjectPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SubjectPage,
    ChapterPage,
    TestListPage,
    PreTestPage,
    PostTestPage,
    ProjectPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    InfoDataProvider
  ]
})
export class AppModule { }
