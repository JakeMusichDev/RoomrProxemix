import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-distance-list-container',
  templateUrl: './distance-list-container.component.html',
  styleUrls: ['./distance-list-container.component.scss']
})
export class DistanceListContainerComponent implements OnInit {
  @Input() destinations: any;

  constructor() { }

  ngOnInit() {
  }
}
