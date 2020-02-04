import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {
  private isCardFaceUp: boolean;

  constructor() {
    this.isCardFaceUp = true;
  }

  getCard(): any {
    return {
      id: 1,
      title: 'Drink water!',
      description: 'Drink 8 glasses of water! Stay hydrated, king!'
    };
  }

  flip(): any {
    let card: any;
    if (this.isCardFaceUp) {
      card = {
        id: 1,
        title: 'Drink water!',
        description: 'Drink 8 glasses of water! Stay hydrated, king!'
      };
    } else {
      card = {
        id: 2,
        title: 'Read a book',
        description: 'It can be any book, a technical book, or just for enjoyment.'
      };
    }
    this.isCardFaceUp = !this.isCardFaceUp;
    return card;
  }
}
