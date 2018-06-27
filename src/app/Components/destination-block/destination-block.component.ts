import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-destination-block',
  templateUrl: './destination-block.component.html',
  styleUrls: ['./destination-block.component.scss']
})
export class DestinationBlockComponent implements OnInit {
  @Input() destination: any;

  constructor() { }

  ngOnInit() {
  }

}
