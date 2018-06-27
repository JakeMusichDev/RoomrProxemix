import { Injectable } from '@angular/core';
import { landmarks } from '../../data/landmarks'
import { Subject } from "rxjs/Subject";
import {MapService } from './map.service'
import { debug } from 'util';

declare var google;

@Injectable()
export class DistanceMatrixService {
  private destinations: Array<any> = [];
  public distances_source = new Subject<Array<any>>();

  constructor(
    private map: MapService
  ) { }

  public initDistanceMatrix = (originCoords) => {
    if (this.destinations.length < 1) {
      this.getLandmarkLatLong()
    }
    this.getDistanceBetweenPoints(originCoords)
  }

  public getLandmarkLatLong = () => {
    for(let i = 0; i < landmarks.length; i++) {
      this.getLatLong(landmarks[i])
    }
    this.map.addDestinationMarkers(this.destinations)
  }

  private getLatLong = (destination) => {
    let destLatLong = new google.maps.LatLng( destination.lat, destination.long )
    this.destinations.push(destLatLong)
  }

  public getDistanceBetweenPoints = (origin) => {
    var selectedMode = document.getElementById('travel-mode') as HTMLInputElement;
    var service = new google.maps.DistanceMatrixService();
    var distanceRequest = {
      origins: [origin],
      destinations: this.destinations,
      travelMode: selectedMode.value,
    }
    service.getDistanceMatrix( distanceRequest, this.callback )
  }

  private callback = (response, status) => {
    if(status === 'OK') {
      let distanceData = this.organizeResults(response, landmarks)
      let filteredDistanceData = distanceData.filter(x => x.data.status === 'OK')
      this.sortDistances(filteredDistanceData)
    } else {
      console.log('Error ', response, status);
    }
  }

  private organizeResults = (response, landmarks) => {
    let destAddresses = response.destinationAddresses
    let rows = response.rows[0].elements
    let arr = []
    for(let i = 0; i < destAddresses.length; i++) {
      let item = { name: landmarks[i].name, address: destAddresses[i], data: rows[i]  }
      arr.push(item)
    }
    return arr 
  }

  private sortDistances = (distances) => {  
    let sortedDists = distances.sort( (a, b) => { 
      return a.data.duration.value - b.data.duration.value 
    })

    this.registerDistanceArray(sortedDists)
  }


  private registerDistanceArray = distance_array => {
    this.distances_source.next(distance_array)
  }


}
