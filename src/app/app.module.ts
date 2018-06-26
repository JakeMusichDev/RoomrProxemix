import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { MatFormFieldModule, MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';

import {GeocodeService} from './Services/geocode.service'
import {DistanceMatrixService} from './Services/distance-matrix.service';
import { DistanceListContainerComponent } from './Components/distance-list-container/distance-list-container.component';
import { OriginInputComponent } from './Components/origin-input/origin-input.component'

@NgModule({
  declarations: [
    AppComponent,
    DistanceListContainerComponent,
    OriginInputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    GeocodeService,
    DistanceMatrixService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
