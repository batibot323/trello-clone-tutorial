import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CardDataService } from 'src/services/card-data.service';
import { CardDetailsComponent } from './card-details/card-details.component';

@Component({
  selector: 'tc-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() id: number;
  myCard: any;

  constructor(private cardDataService: CardDataService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.myCard = this.cardDataService.getCard(this.id);
  }

  openCardDetails(myCard) {
    console.log('clicked');
    const modalRef = this.modalService.open(CardDetailsComponent);
    modalRef.componentInstance.cardDetails = this.myCard;
  }
}
