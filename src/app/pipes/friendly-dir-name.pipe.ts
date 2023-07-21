import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'friendlyDirName'
})
export class FriendlyDirNamePipe implements PipeTransform {

  transform(value: string): string {
    return value.toLowerCase().charAt(0).toUpperCase() + value.slice(1);
  }

}
