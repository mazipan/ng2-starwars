import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filmTitle'
})
export class FilmTitlePipe implements PipeTransform {

  transform(value: string, dateString: string): string {
  	let res = 'Film '+ value

    return res;
  }

}
