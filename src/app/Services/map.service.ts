import { Injectable } from '@angular/core';
import { landmarks } from '../../data/landmarks'
import { DirectionsService } from '../Services/directions.service'

declare var google;

@Injectable()
export class MapService {
  private map: any;

  constructor(
    private directions: DirectionsService
  ) { }

  public setMap = (latLng) =>  {
    this.map = new google.maps.Map(document.getElementById('map'), { center: latLng, zoom: 14})
    this.addMarker(latLng)
    return this.map
  }

  public addDestinationMarkers = (destinations) => {
    for (let i = 0; i < destinations.length; i++) {
      this.addMarker(destinations[i])
    }
  }

  public addMarker = (latLng) => {
    const service = new google.maps.places.PlacesService(this.map);
    const infoWindow = new google.maps.InfoWindow();
    // const id = this.reGeo(latLng)
    var marker = new google.maps.Marker({
      map: this.map,
      position: latLng,
      zoom: 100,
      icon: {
        url: 'https://developers.google.com/maps/documentation/javascript/images/circle.png',
        anchor: new google.maps.Point(10, 10),
        scaledSize: new google.maps.Size(10, 17)
      }
    });

    google.maps.event.addListener(marker, 'click', function() {
      var request = {placeId: latLng.place_id};

      service.getDetails(request, function(result, status) {
        if (status !== google.maps.places.PlacesServiceStatus.OK) {
          console.error(status);
          return;
        }
        infoWindow.setContent(result.name);
        infoWindow.open(this.map, marker);
      });
    });
  }

  private reGeo = (latLng) => {
    // const geocoder = new google.maps.Geocoder;
    // geocoder.geocode({"location":latLng}, function(results, error){
    //   if (status === 'OK') {
    //     if ([0]) {
    //       console.log('====================================');
    //       console.log('somethin');
    //       console.log('====================================');
    //       // map.setZoom(11);
    //       // var marker = new google.maps.Marker({
    //       //   position: latlng,
    //       //   map: map
    //       // });
    //       // infowindow.setContent(results[0].formatted_address);
    //       // infowindow.open(map, marker);
    //     } else {
    //       window.alert('No results found');
    //     }
    //   } else {
    //     window.alert('Geocoder failed due to: ' + status);
    //   }
    // })
  }
}
