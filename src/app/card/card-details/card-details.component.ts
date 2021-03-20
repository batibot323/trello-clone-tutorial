import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tc-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  @Input() cardDetails;

  constructor() { }

  ngOnInit() {
  }

}
