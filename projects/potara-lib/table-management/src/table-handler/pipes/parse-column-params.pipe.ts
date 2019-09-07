import { Pipe, PipeTransform } from '@angular/core';
import { TableColumnParams } from '../models';
import { parseDotNotation } from '../functions/parse-dot-notation';

@Pipe({
  name: 'parseColumnParams'
})
export class ParseColumnParamsPipe implements PipeTransform {
  public transform<T>(data: any, params: TableColumnParams<T>) {
    if (!params) {
      return undefined;
    }
    if (params.entityToShare) {
      return { ...params, entityToShare: parseDotNotation(data, params.entityToShare.toString()) };
    }
    return params;
  }
}
