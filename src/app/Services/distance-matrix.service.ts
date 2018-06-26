import { Injectable } from '@angular/core';
import { landmarks } from '../../data/landmarks'
import { Subject } from "rxjs/Subject";

declare var google;

@Injectable()
export class DistanceMatrixService {
  private destinations: Array<any> = [];
  public distances_source = new Subject<Array<any>>();

  constructor() { }

  public initDistanceMatrix = (originCoords) => {
    this.getDistanceData()
    this.getDistanceBetweenPoints(originCoords)
  }

  public getDistanceData = () => {
    for(let i = 0; i < landmarks.length; i++) {
      this.getLatLong(landmarks[i])
    }
  }

  private getLatLong = (destination) => {
    let destLatLong = new google.maps.LatLng( destination.lat, destination.long )
    this.destinations.push(destLatLong)
  }

  public getDistanceBetweenPoints = (origin) => {  
    var service = new google.maps.DistanceMatrixService(); 
    var distanceRequest = {
      origins: [origin],
      destinations: this.destinations,
      travelMode: 'TRANSIT',
    }

    service.getDistanceMatrix( distanceRequest, this.callback )
  }

  private callback = (response, status) => {
    if(status === 'OK') {
      let distanceData = this.organizeResults(response)
      let filteredDistanceData = distanceData.filter(x => x.data.status === 'OK')
      this.parseDistances(filteredDistanceData)
    } else {
      alert('error getting distances')
    }
  }

  private organizeResults = (response) => {
    let destAddresses = response.destinationAddresses
    let rows = response.rows[0].elements
    let arr = []
    for(let i = 0; i < destAddresses.length; i++) {
      let item = { address: destAddresses[i], data: rows[i]  }
      arr.push(item)
    }
    return arr 
  }

  private parseDistances = (distances) => {  
    let sortedDists = distances.sort( (a, b) => { 
      return a.data.duration.value - b.data.duration.value 
    })
    this.registerDistanceArray(sortedDists)
  }


  private registerDistanceArray = distance_array => {
    console.log('====================================');
    console.log('CHANGE ', distance_array);
    console.log('====================================');
    this.distances_source.next(distance_array)
  }


}
