import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MapService } from './map.service'
import { DistanceMatrixService } from './distance-matrix.service'

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
    private distance: DistanceMatrixService,
    private map:MapService
  ) { }

  public initSearch = (address) => {
    const url = this.buildCoordURL(address)
    this.getCoords(url)
  }

  private buildCoordURL = (addressString) =>  {
    let streetSplit = addressString.street.split(" ").map( word => word + '+').join('')
    let citySplit = addressString.city.split(" ").map( word => word + '+').join('')
    let state =  addressString.state
    let requestString = 'json?address=' + streetSplit + ',' + citySplit + ",+" + state  + '&key=' + KEY 
    console.log('====================================');
    console.log("Request String ", requestString);
    console.log('====================================');
    return this.geocodeBaseUrl + requestString
  }

  private getCoords = (url:string) => {
    this.http.get(url)
      .subscribe( data => this.getLocations(data) )
  } 

  private getLocations = (data:any) => {
    this.originLocation = data.results[0].geometry.location
    let coords = new google.maps.LatLng(this.originLocation.lat, this.originLocation.lng)
    this.map.setMap(coords)
    this.distance.initDistanceMatrix(coords)
  }

  private setMap = (latLng) =>  {
    return new google.maps.Map(document.getElementById('map'), {
      center: latLng,
      zoom: 15
    });
  }

}
