import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PassarioDetailsPage } from './passario-details';

@NgModule({
  declarations: [
    PassarioDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PassarioDetailsPage),
  ],
})
export class PassarioDetailsPageModule {}
