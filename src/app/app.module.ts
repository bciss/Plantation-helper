import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PlantInfosService} from './services/plant-infos.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PlantInfosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
