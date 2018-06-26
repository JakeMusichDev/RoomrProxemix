import { Injectable } from '@angular/core';

declare var google;

@Injectable()
export class DirectionsService {
  private originLocation: any;

  constructor() { }

  public setOrigin = (originLocation) => {
    this.originLocation = originLocation  
  }

  public initDirection = (map) => {
    var directionsDisplay = new google.maps.DirectionsRenderer;
    directionsDisplay.setMap(map);

    // var onChangeHandler = function() {
    //   // calculateAndDisplayRoute(directionsService, directionsDisplay);
    // };

    // document.getElementById('start').addEventListener('change', onChangeHandler);
    // document.getElementById('end').addEventListener('change', onChangeHandler);
  }

  private calculateAndDisplayRoute = (directionsService, directionsDisplay) => {
    const directionService = new google.maps.DirectionsService;

    // directionsService.route({
    //   origin: ,
    //   destination: ,
    //   travelMode: 'DRIVING'
    // }, function(response, status) {
    //   if (status === 'OK') {
    //     directionsDisplay.setDirections(response);
    //   } else {
    //     window.alert('Directions request failed due to ' + status);
    //   }
    // });
  }


}
