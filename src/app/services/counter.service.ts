import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  _counter: number = 10;

  get counter() {
    return this._counter;
  }

  set counter(value: number) {
    this._counter = value;
  }

  incCounter() {
    this._counter++;
  }

  decCounter() {
    this._counter--;
  }

  constructor() {}
}
