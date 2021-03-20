import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../card.model';

@Component({
  selector: 'tc-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  @Input() cardDetails: Card;

  constructor() { }

  ngOnInit() {
  }

}
