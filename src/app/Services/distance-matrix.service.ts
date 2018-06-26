import { Injectable } from '@angular/core';

declare var google;

@Injectable()
export class DistanceMatrixService {

  constructor() { }

  public getDistanceBetweenPoints = (origin, destination) => {

    
    var origin1 = new google.maps.LatLng(55.930385, -3.118425);
    var origin2 = 'Greenwich, England';
    var destinationA = 'Stockholm, Sweden';
    var destinationB = new google.maps.LatLng(50.087692, 14.421150);

    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix({
        origins: [origin1, origin2],
        destinations: [destinationA, destinationB],
        travelMode: 'DRIVING',
        transitOptions: TransitOptions,
        drivingOptions: DrivingOptions,
        unitSystem: UnitSystem,
        avoidHighways: Boolean,
        avoidTolls: Boolean,
      },
      this.callback);

  }

  private callback = () => {
    
  }


}
