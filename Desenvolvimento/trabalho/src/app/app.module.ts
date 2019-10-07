import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TelaInicialPage } from "../pages/tela-inicial/tela-inicial";
import { ImagemPassaroPage } from "../pages/imagem-passaro/imagem-passaro";
import { NativeAudio } from "@ionic-native/native-audio";
import { SomPage } from "../pages/som/som";
import { ContatoPage } from "../pages/contato/contato";


@NgModule({
  declarations: [
    MyApp,
    TelaInicialPage,
    HomePage,
    ImagemPassaroPage,
    SomPage,
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
    TelaInicialPage,
    HomePage,
    ImagemPassaroPage,
    SomPage,
    ContatoPage
  ],
  providers: [
    NativeAudio,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
})
export class AppModule {}
