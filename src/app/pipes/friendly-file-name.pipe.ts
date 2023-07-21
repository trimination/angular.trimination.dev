import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'friendlyFileName'
})
export class FriendlyFileNamePipe implements PipeTransform {

  transform(value:string): string {
    value = value.replace('.png', '');
    let parts = value.split('-');
    return parts[0].toUpperCase();
  }

}
