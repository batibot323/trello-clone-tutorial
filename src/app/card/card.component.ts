import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CardDataService } from 'src/services/card-data.service';
import { CardDetailsComponent } from './card-details/card-details.component';
import { Card } from './card.model';

@Component({
  selector: 'tc-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() id: number;
  myCard: Card;

  constructor(private cardDataService: CardDataService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.myCard = this.cardDataService.getCard(this.id);
  }

  openCardDetails() {
    console.log('clicked');
    const modalRef = this.modalService.open(CardDetailsComponent);
    modalRef.componentInstance.cardDetails = this.myCard;
  }
}
