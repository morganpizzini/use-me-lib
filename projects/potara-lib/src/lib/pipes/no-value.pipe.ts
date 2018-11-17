import { Pipe, PipeTransform } from '@angular/core';
/*
 * Return 'no' if input is 0
 * Usage:
 *   value | noValue:'???'
 * Example:
 *   {{ null | noValue:'???' }}
 *   formats to: ???
 *   {{ null | noValue }}
 *   formats to: ---
*/
@Pipe({
  name: 'noValue'
})
export class NoValuePipe implements PipeTransform {
  transform(value: any, text: string): string {
    if (!value) {
      return text ? text : '---';
    }
    return value.toString();
  }
}
