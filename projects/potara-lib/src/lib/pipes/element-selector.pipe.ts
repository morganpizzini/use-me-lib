import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

/*
 * Select occurence from list and replace string template with obj properties
 * Usage:
 *   [] | elementSelector:'identifier':'identifierProperty':'template'
 * Example:
 *   {{plants | elementSelector: 'plantId':request.plantId:'%code% - %name%'}}
 *   formats to: MIL - Sect
*/
@Pipe({
    name: 'elementSelector'
})
export class ElementSelectorPipe implements PipeTransform {
    transform(values: any[], txtProperty: string, valueProperty: string, resultTemplate: string): string {

        // filter provided list by txtProperty on valueProperty
        let result = _.filter(values, o => o[txtProperty] === valueProperty.toString());

        // if result is invalid
        if (!result || result.length === 0) {
            return '-no match-';
        }

        // select first result
        result = result[0];

        // template regex
        const re1 = /(%[a-zA-Z0-9]+%)/gi;

        // find occurence in result template stirng
        const regValues = resultTemplate.match(re1);

        // no occurence
        if (!regValues) {
            return '-erorr template matching-';
        }

        // loop on result match
        regValues.forEach(element => {

            // regex for find occurence of single group
            const regex = new RegExp('(' + element + ')');

            // trim every template part from match '%'
            const objProperty = element.replace(new RegExp('%', 'g'), '');

            // replace template string with object property
            resultTemplate = resultTemplate.replace(regex, result[objProperty]);
        });

        // return compiled string
        return resultTemplate;
    }
}
