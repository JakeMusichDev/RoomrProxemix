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

  public initSearch = (address) => {
    const url = this.buildCoordURL(address)
    this.getCoords(url)
  }

  private buildCoordURL = (addressString) =>  {
    
    let streetSplit = this.arteryAddress.street.split(" ").map( word => word + '+').join('')
    let citySplit = this.arteryAddress.city.split(" ").map( word => word + '+').join('')
    let state =  this.arteryAddress.state
    let requestString = 'json?address=' + streetSplit + ',' + citySplit + ",+" + state  + '&key=' + KEY 
    return this.geocodeBaseUrl + requestString
  }

  private getCoords = (url:string) => {
    this.http.get(url)
      .subscribe( data => this.getLocations(data) )
  }

  private getLocations = (data:any) => {
    this.originLocation = data.results[0].geometry.location
    let coords = new google.maps.LatLng(this.originLocation.lat, this.originLocation.lng)
    this.distance.initDistanceMatrix(coords)  
    // this.runSearch(coords)
  }

  // private runSearch = (coords) => {
  //   let map = this.setMap(coords)
  //   let request = { location: coords, radius: '10', type: ['museum', 'art_gallery']}
  //   const service = new google.maps.places.PlacesService(map)
  //   service.nearbySearch(request, this.nearbySearchCallback)
  // }

  // private nearbySearchCallback = (results, status) => {
  //   if (status == google.maps.places.PlacesServiceStatus.OK) {

  //     for (var i = 0; i < results.length; i++) {
  //       console.log(results[i]);
        
  //       var place = results[i];
  //     }
  //   }
  // }

  // //------------------------------------------------------
  // // Build HTML Map Element
  // //------------------------------------------------------
  // private setMap = (latLng) =>  {
  //   return new google.maps.Map(document.getElementById('map'), {
  //     center: latLng,
  //     zoom: 15
  //   });
  // }
}
