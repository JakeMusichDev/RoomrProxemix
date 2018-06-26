import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { OriginInputComponent } from './Components/origin-input/origin-input.component'
import { DistanceListContainerComponent } from './Components/distance-list-container/distance-list-container.component';

import {GeocodeService} from './Services/geocode.service'
import {DistanceMatrixService} from './Services/distance-matrix.service';
import { MapService } from './Services/map.service'

@NgModule({
  declarations: [
    AppComponent,
    DistanceListContainerComponent,
    OriginInputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
    // MatFormFieldModule,
    // MatInputModule
  ],
  providers: [
    GeocodeService,
    DistanceMatrixService,
    MapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
