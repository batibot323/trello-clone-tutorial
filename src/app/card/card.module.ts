import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CardComponent } from './card.component';



@NgModule({
  declarations: [CardComponent, CardDetailsComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    CardComponent
  ],
  entryComponents: [
    CardDetailsComponent
  ]
})
export class CardModule { }
