import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { ListModule } from '../list/list.module';



@NgModule({
  declarations: [BoardComponent],
  imports: [
    CommonModule,
    ListModule
  ],
  exports: [
    BoardComponent
  ]
})
export class BoardModule { }
