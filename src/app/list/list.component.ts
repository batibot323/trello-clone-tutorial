import { Component, OnInit } from '@angular/core';
import { CardDataService } from 'src/services/card-data.service';

@Component({
  selector: 'tc-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listOfCardIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private cardDataService: CardDataService) { }

  ngOnInit() {
  }

  addCardToList(cardTitle) {
    this.listOfCardIds.push(this.cardDataService.addCard(cardTitle));
  }

}
