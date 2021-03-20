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
    },
    {
      id: 4,
      title: 'Sleep early!',
      description: 'Sleep is essential!'
    },
    {
      id: 5,
      title: 'Buy milk and eggs',
      description: 'Nothing beats tasty sources of protein.'
    },
    {
      id: 6,
      title: 'Household chores',
      description: 'Clean up, wash dishes, and sweep the floor.'
    },
    {
      id: 7,
      title: 'Talk with friends',
      description: 'You miss them, you know you do.'
    },
    {
      id: 8,
      title: 'Breathe',
      description: 'Go relax and do nothing.'
    },
    {
      id: 9,
      title: 'Review Flash Cards',
      description: 'It could be about anything, just do it!'
    },
    {
      id: 10,
      title: 'Play with cat!',
      description: `Don't forget to send some pictures!`
    }
  ];

  getCard(id): any {
    return this.cardList.find(card => card.id === id);
  }

  addCard(title): number {
    const newlyCreatedId = (this.cardList.splice(-1)[0].id) + 1;
    this.cardList.push({
      id: newlyCreatedId,
      title,
      description: ''
    });
    return newlyCreatedId;
  }
}
