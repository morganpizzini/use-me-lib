import { Pipe, PipeTransform } from '@angular/core';
/*
 * Return 'no' if input is 0
 * Usage:
 *   value | readSeconds
 * Example:
 *   {{ 3601 | readSeconds }}
 *   formats to: 1 hour 1 second
 *   {{ 60 | readSeconds:'m' }}
 *   formats to: 1 hour
*/
@Pipe({
  name: 'readSeconds'
})
export class ReadableSecondsPipe implements PipeTransform {
  transform(value: number, startFrom: string = '', condensed: boolean= true): string {
    if (!value || value === 0) {
      return '---';
    }
    // default
    let stringsValues: string[] = [];
    if ( condensed ) {
      stringsValues = ['d', 'h', 'm', 's'];
    } else {
      stringsValues = ['day', 'hour', 'minute', 'second'];
    }

    // seconds
    let seconds = 0;

    // minutes
    let minutes = 0;

    if (startFrom && startFrom.toLowerCase() === 'm') {

      // minutes
      minutes = value;

    } else {
      // seconds
      seconds = value % 60;
      // minutes
      minutes = Math.floor(value / 60);
    }
    // hours
    let hours = Math.floor(minutes / 60);

    // fix minutes
    minutes %= 60;

    // days
    const days = Math.floor(hours / 24);

    // fix hours
    hours %= 24;

    let resultValue = '';
    if (days > 0) {
      resultValue = this.pluralizeValue(days, stringsValues[0]);
      if (hours > 0) {
        resultValue += ' ' + this.pluralizeValue(hours, stringsValues[1]);
      }
    } else {
      if (hours > 0) {
        resultValue = this.pluralizeValue(hours, stringsValues[1]);
        if (minutes > 0) {
          resultValue += ' ' + this.pluralizeValue(minutes, stringsValues[2]);
        }
      } else {
        if (minutes > 0) {
          resultValue = this.pluralizeValue(minutes, stringsValues[2]);
          if (seconds > 0) {
            resultValue += ' ' + this.pluralizeValue(seconds, stringsValues[3]);
          }
        } else {
          resultValue = this.pluralizeValue(seconds, stringsValues[3]);
        }
      }
    }
    return resultValue;
  }
  pluralizeValue(value: number, stringValue: string) {
    let result = `${value} ${stringValue}`;
    // check plurals and not condensed signature
    if (value > 1 && stringValue.length > 1) {
      result += 's';
    }
    return result;
  }
}
