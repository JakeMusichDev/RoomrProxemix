import { Component, OnInit } from '@angular/core';
import { GeocodeService } from '../../Services/geocode.service'

@Component({
  selector: 'app-origin-input',
  templateUrl: './origin-input.component.html',
  styleUrls: ['./origin-input.component.scss']
})
export class OriginInputComponent implements OnInit {
  private values: string;
  constructor() { }

  ngOnInit() {
  }

  private onKey(value:string) {
    this.values = value;
  }

  private onSubmit(event) {

  }

}
