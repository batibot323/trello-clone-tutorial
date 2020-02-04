import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {

  constructor() { }
  
  getCard(): any {
    return {
      id: 1,
      title: 'Drink water!',
      description: 'Drink 8 glasses of water! Stay hydrated, king!'
    };
  }
}
