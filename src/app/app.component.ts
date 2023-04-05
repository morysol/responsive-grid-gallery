import { Component } from '@angular/core';

import { Breakpoints } from '@angular/cdk/layout';

import { CounterService } from './services/counter.service';
import { FetchService } from 'src/app/services/fetch.service';

// interface IPicturesList {
//   largeImageURL: string;
//   previewURL: string;
//   previewHeight: number;
//   previewWidth: number;
//   tags: string;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'api-and-grid';
  appCounter = 0;

  page: number = 0;
  perPage: number = 0;
  query: string = '';

  isBack: boolean = false;
  isNext: boolean = false;

  // extCounter: CounterService;
  pictures: any = [];
  total: number = 0;

  largeImageURL: string;

  error: Error | null = null;

  constructor(srv: CounterService, private fetch: FetchService) {}

  btnSearch(e: any) {
    this.fetch.QUERY_STRING = this.query;
    this.fetch.page = 1;
    this.getPictures();
  }

  btnBack() {
    this.fetch.page =
      (this.page - 1) * this.perPage < this.perPage ? this.page : this.page - 1;
    this.getPictures();
  }

  btnNext() {
    this.fetch.page =
      Math.floor(this.total / this.perPage) + 1 > this.page
        ? this.page + 1
        : this.page;
    this.getPictures();
  }

  getPictures() {
    console.log(Breakpoints.Web);

    this.pictures = this.fetch.search();

    // this.fetch.search().subscribe(
    //   (response: any) => {
    //     this.pictures = response.hits.map(
    //       ({
    //         largeImageURL,
    //         previewURL,
    //         previewHeight,
    //         previewWidth,
    //         tags,
    //       }: any) => ({
    //         largeImageURL,
    //         previewURL,
    //         previewHeight,
    //         previewWidth,
    //         tags,
    //       })
    //     );

    //     this.total = response.totalHits;

    //     if (this.total === 0) {
    //       this.page = 0;
    //       this.perPage = 0;
    //     } else {
    //       this.page = this.fetch.page;
    //       this.perPage = this.fetch.perPage;
    //     }

    //     const current = this.page * this.perPage;

    //     this.isNext = !(current > this.total || this.total === 0);
    //     this.isBack = current > this.perPage;
    //   },
    //   (error) => {
    //     this.error = error.message;
    //     console.log(error);
    //   }
    // );
  }
}
