import { Component, ChangeDetectorRef } from '@angular/core';
import { GeocodeService } from './Services/geocode.service'
import { DistanceMatrixService } from './Services/distance-matrix.service'
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private destinations: Array<any> = [];
  private destination_subscription: Subscription;
  private loaded: Boolean = false;

  constructor(
    private geocode: GeocodeService,
    private distance: DistanceMatrixService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // this.geocode.init()
    this.subscribe()
  }

  private subscribe = () => {
    this.destination_subscription = this.distance.distances_source
      .subscribe( destinations => { 
        this.handleInput(destinations)
        this.ref.detectChanges()
      })
  }

  private handleInput = (destinations) =>  {
    this.destinations = destinations 
  }
}