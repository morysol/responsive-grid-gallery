import { Component } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';
import { FetchService } from 'src/app/services/fetch.service';

// type Hits = Array<{ largeImageURL: string; previewURL: string }>;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  counter = 0;

  // extData: CounterService;

  btnHandle(event: any) {
    // console.log(event);
    // const { target, currentTarget } = event;
    // console.log('target  ', target, 'currentTarget', currentTarget);

    this.counter += 1;
    this.srv.decCounter();
    this.fetch.search();
  }

  constructor(private srv: CounterService, private fetch: FetchService) {}

  getExtData() {
    return this.srv.counter;
  }
}
