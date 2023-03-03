import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pager' })
export class PagerPipe implements PipeTransform {
  transform(value: number) {
    return isNaN(value) ? 0 : Math.floor(value) + 1;
  }
}
