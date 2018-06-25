import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';

import {GeocodeService} from './Services/geocode.service'
import {DistanceMatrixService} from './Services/distance-matrix.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    GeocodeService,
    DistanceMatrixService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
