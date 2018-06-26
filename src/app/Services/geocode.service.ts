import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MapService } from './map.service'
import { DistanceMatrixService } from './distance-matrix.service'
import { DirectionsService } from '../Services/directions.service'

import { KEY } from '../../data/key'

declare var google;

@Injectable()
export class GeocodeService {
  private geocodeBaseUrl: string = 'https://maps.googleapis.com/maps/api/geocode/';
  private originLocation: any;
  private originCoordinates: any;

  private arteryAddress = {
    street: '30 Irving Place',
    city: 'New York',
    state: "NY"
  }

  constructor(
    private http: HttpClient,
    private distance: DistanceMatrixService,
    private map: MapService,
    private directions: DirectionsService
  ) { }

  public initSearch = (address) => {
    const url = this.buildOriginCoordURL(address)
    this.getOriginCoords(url)
  }

  private buildOriginCoordURL = (addressString) =>  {
    let streetSplit = addressString.street.split(" ").map( word => word + '+').join('')
    let citySplit = addressString.city.split(" ").map( word => word + '+').join('')
    let state =  addressString.state
    let requestString = 'json?address=' + streetSplit + ',' + citySplit + ",+" + state  + '&key=' + KEY
    return this.geocodeBaseUrl + requestString
  }

  private getOriginCoords = (url:string) => {
    this.http.get(url).subscribe( data => this.getLocations(data) )
  } 

  private getLocations = (data:any) => {
    this.originLocation = data.results[0]
    this.originCoordinates = new google.maps.LatLng(this.originLocation.geometry.location.lat, this.originLocation.geometry.location.lng)
    this.directions.setOrigin(this.originLocation)
    this.map.setMap(this.originCoordinates)
    this.distance.initDistanceMatrix(this.originCoordinates)
  }

  private setMap = (latLng) =>  {
    return new google.maps.Map(document.getElementById('map'), {
      center: latLng,
      zoom: 15
    });
  }

}
