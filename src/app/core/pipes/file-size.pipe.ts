import { Pipe, PipeTransform } from '@angular/core';
import humanSize from 'human-size';
@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return humanSize(value);
  }

}
