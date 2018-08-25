import { Pipe, PipeTransform } from '@angular/core';
/*
 * Return key/value array from enumType variable
 * Usage:
 *   value | enumToList
 * Example:
 *   {{ kinds | enumToList }}
 *   formats to: [1:'xx',2:'yy']
*/
@Pipe({name: 'enumToList'})
export class EnumToListPipe implements PipeTransform {
  transform(value): any {
    const keys = [];
    for (const enumMember in value) {
      if (!isNaN(parseInt(enumMember, 10))) {
        keys.push({key: enumMember, value: value[enumMember]});
      }
    }
    return keys;
  }
}
