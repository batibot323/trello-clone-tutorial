import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {

  constructor() {
    console.log('card-data service is instantiated!');
  }

  cardList: any[] = [
    {
      id: 1,
      title: 'Drink water!',
      description: 'Drink 8 glasses of water! Stay hydrated, king!'
    },
    {
      id: 2,
      title: 'Read a book',
      description: 'It can be any book, a technical book, or just for enjoyment.'
    },
    {
      id: 3,
      title: 'Finish Gym Module',
      description: 'Make sure it includes proper routing.'
    }
  ];

  getCard(id): any {
    return this.cardList.find(card => card.id === id);
  }
}
