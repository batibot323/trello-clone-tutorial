import { Component, Input, OnInit } from '@angular/core';
import { CardDataService } from 'src/services/card-data.service';

@Component({
  selector: 'tc-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() id: number;
  myCard: any;

  constructor(private cardDataService: CardDataService) { }

  ngOnInit() {
    this.myCard = this.cardDataService.getCard(this.id);
  }
}
