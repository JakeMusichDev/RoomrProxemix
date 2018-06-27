import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

// Components
import { AppComponent } from './app.component';
import { OriginInputComponent } from './Components/origin-input/origin-input.component'
import { DistanceListContainerComponent } from './Components/distance-list-container/distance-list-container.component';
import { DestinationBlockComponent } from './Components/destination-block/destination-block.component';
import { DestinationContainerComponent } from './Components/destination-container/destination-container.component'

// Services
import {GeocodeService} from './Services/geocode.service'
import {DistanceMatrixService} from './Services/distance-matrix.service';
import { MapService } from './Services/map.service'
import { DirectionsService } from './Services/directions.service';

@NgModule({
  declarations: [
    AppComponent,
    DistanceListContainerComponent,
    OriginInputComponent,
    DestinationBlockComponent,
    DestinationContainerComponent
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
    MapService,
    DirectionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
