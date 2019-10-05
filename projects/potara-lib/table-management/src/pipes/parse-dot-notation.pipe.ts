import { Pipe, PipeTransform } from '@angular/core';
import { TableColumnParams } from '../models';
import { parseDotNotation } from '../functions/parse-dot-notation';

@Pipe({
  name: 'parseDotNotation'
})
export class ParseDotNotationPipe implements PipeTransform {
  public transform(data: any, field: string) {
    return parseDotNotation(data, field);
  }
}
