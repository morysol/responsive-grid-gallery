import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, subscribeOn, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  BASE_URL = 'https://pixabay.com/api/';
  API_KEY = '27219391-602be5e609794f999d4badcc3';
  QUERY_STRING = 'yellow+flowers';
  IMAGE_TYPE = 'photo';
  PAGE_NUMBER = 1;
  PER_PAGE = 24;

  constructor(private http: HttpClient) {}

  pictures: any = [];

  search() {
    const HTTP_REQUEST = `${this.BASE_URL}?key=${this.API_KEY}&q=${this.QUERY_STRING}&image_type=${this.IMAGE_TYPE}&page=${this.PAGE_NUMBER}&per_page=${this.PER_PAGE}`;

    type picturesList = {
      largeImageURL: string;
      previewURL: string;
      previewHeight: number;
      previewWidth: number;
      tags: string;
    };

    const response = this.http.get(HTTP_REQUEST);

    this.pictures = response.pipe(
      map((response: any) => {
        let pictures = response.hits.map(<T extends picturesList>(hit: T) => ({
          largeImageURL: hit.largeImageURL,
          previewURL: hit.previewURL,
          previewHeight: hit.previewHeight,
          previewWidth: hit.previewWidth,
          tags: hit.tags,
        }));
        console.log(Array.isArray(pictures));
        console.log(pictures);
        return pictures;
      })
    );

    // response.hits.map(
    //   ({
    //     largeImageURL,
    //     previewURL,
    //     previewHeight,
    //     previewWidth,
    //     tags,
    //   }: any) => ({
    //     largeImageURL,
    //     previewURL,
    //     previewHeight,
    //     previewWidth,
    //     tags,
    //   })
    // );

    return this.pictures;
  }

  get query(): string {
    return this.QUERY_STRING;
  }

  set query(q: string) {
    this.QUERY_STRING = q;
  }

  get perPage(): number {
    return this.PER_PAGE;
  }

  set perPage(p: number) {
    this.PER_PAGE = p;
  }

  get page(): number {
    return this.PAGE_NUMBER;
  }
  set page(n: number) {
    this.PAGE_NUMBER = n;
  }
}
