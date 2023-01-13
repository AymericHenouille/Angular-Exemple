import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reference'
})
export class ReferencePipe implements PipeTransform {

  transform(value: string): string {
    return value.toLowerCase().replace(/ /g, '_');
  }

}
