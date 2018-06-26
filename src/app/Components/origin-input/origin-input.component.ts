import { Component, OnInit } from '@angular/core';
import { GeocodeService } from '../../Services/geocode.service'

@Component({
  selector: 'app-origin-input',
  templateUrl: './origin-input.component.html',
  styleUrls: ['./origin-input.component.scss']
})
export class OriginInputComponent implements OnInit {
  private value: string;
  private address: string;
  private city: string;
  private state: string;

  constructor(
    private geocode:GeocodeService
  ) { }

  ngOnInit() {
  }

  private onSubmit(event) {
    const origin = {
      street: this.address,
      city: this.city, 
      state: this.state
    }
    
    this.geocode.initSearch(origin)
  }

}
