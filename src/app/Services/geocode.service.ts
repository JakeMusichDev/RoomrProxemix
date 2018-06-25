import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {DistanceMatrixService} from './distance-matrix.service'

import { KEY } from '../../data/key'

declare var google;

@Injectable()
export class GeocodeService {
  private geocodeBaseUrl: string = 'https://maps.googleapis.com/maps/api/geocode/';
  private originLocation: any;
  private arteryAddress = {
    street: '30 Irving Place',
    city: 'New York',
    state: "NY"
  }

  constructor(
    private http: HttpClient,
    private distance: DistanceMatrixService
  ) { }

  public init = () => {
    const url = this.buildCoordURL()
    this.getCoords(url)
  }

  private getCoords = (url:string) => {
    this.http.get(url)
      .subscribe( data => this.getLocations(data) )
  }

  private getLocations = (data:any) => {
    this.originLocation = data.results[0].geometry.location
    let coords = new google.maps.LatLng(this.originLocation.lat, this.originLocation.lng)    
    this.runSearch(coords)
  }

  private runSearch = (coords) => {
    let map = this.setMap(coords)
    let request = { location: coords, radius: '10', type: ['museum', 'art_gallery']}
    const service = new google.maps.places.PlacesService(map)
    service.nearbySearch(request, this.nearbySearchCallback)
  }

  private nearbySearchCallback = (results, status) => {
    if (status == google.maps.places.PlacesServiceStatus.OK) {

      for (var i = 0; i < results.length; i++) {
        console.log(results[i]);
        
        var place = results[i];
      }
    }
  }

  //------------------------------------------------------
  // Build HTML Map Element
  //------------------------------------------------------
  private setMap = (latLng) =>  {
    return new google.maps.Map(document.getElementById('map'), {
      center: latLng,
      zoom: 15
    });
  }


  //------------------------------------------------------
  // Build Request URL 
  //------------------------------------------------------
  private buildCoordURL = () =>  {
    let streetSplit = this.arteryAddress.street.split(" ").map( word => word + '+').join('')
    let citySplit = this.arteryAddress.city.split(" ").map( word => word + '+').join('')
    let state =  this.arteryAddress.state
    let requestString = 'json?address=' + streetSplit + ',' + citySplit + ",+" + state  + '&key=' + KEY 
    return this.geocodeBaseUrl + requestString
  }



}

// {
//   "geometry": {
//     "location": {
//       "lat": 40.73498910000001,
//       "lng": -73.98773640000002
//     },
//     "viewport": {
//       "south": 40.7336877697085,
//       "west": -73.98920188029149,
//       "north": 40.7363857302915,
//       "east": -73.98650391970853
//     }
//   },
//   "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/civic_building-71.png",
//   "id": "6d56decb69d41290cf33f37439b44d3bdc8e0f33",
//   "name": "Kindred Partners",
//   "place_id": "ChIJB2w3QZ9ZwokRbg800UF8Hkc",
//   "reference": "CmRRAAAAFt9BWes2LR8Lb424eLxufEITgrR6YZ0rxJwEBdV-00oWZN870W7b94jUt-a8Ny3p008Ni4NvV639pflTclme94mgsSVn0rhaKDhfrzcUABlaxE41bKP1j77xZ9prgp6OEhBDdjJhD-o63zJ7h-I0NukjGhTMyXudVULgBJtr-GFVt0PASI-0tw",
//   "scope": "GOOGLE",
//   "types": [
//     "point_of_interest",
//     "establishment"
//   ],
//   "vicinity": "30 Irving Place, New York",
//   "html_attributions": []
// }