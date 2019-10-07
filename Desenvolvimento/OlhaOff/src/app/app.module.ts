import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AveService } from '../providers/ave-service/ave-service';
import { TelaInicialPage } from "../pages/tela-inicial/tela-inicial";
import { ContatoPage } from "../pages/contato/contato";
import { NativeAudio } from "@ionic-native/native-audio";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TelaInicialPage,
    ContatoPage
  
  ],

  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TelaInicialPage,
    ContatoPage

   
  ],
  providers: [
    NativeAudio,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AveService
  ]
})
export class AppModule {}
