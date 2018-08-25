import { Pipe, PipeTransform } from '@angular/core';
/*
 * Return 'no' if input is 0
 * Usage:
 *   value | noElement
 * Example:
 *   {{ 0 | noElement }}
 *   formats to: No
 *   {{ 0 | noElement:'boh' }}
 *   formats to: boh
*/
@Pipe({
  name: 'noElement'
})
export class NoElementPipe implements PipeTransform {
  transform(value: number, noString: string = ''): string {
    if (!value || value === 0) {
      return noString || noString.length === 0 ? noString : 'No';
    }
    return value.toString();
  }
}
