import { Component } from '@angular/core';
import {GeocodeService} from './Services/geocode.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private geocode: GeocodeService
  ) {}
  ngOnInit(): void {
    this.geocode.init()
  }
}