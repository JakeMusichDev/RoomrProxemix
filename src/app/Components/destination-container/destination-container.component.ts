import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-destination-container',
  templateUrl: './destination-container.component.html',
  styleUrls: ['./destination-container.component.scss']
})
export class DestinationContainerComponent implements OnInit {
  @Input() destinations: any;
  
  constructor() { }

  ngOnInit() {
  }

}
