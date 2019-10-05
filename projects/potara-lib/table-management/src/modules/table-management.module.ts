import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PotaraModule } from 'potara-lib';
import { TemplateHolderModule } from 'potara-lib/template-holder';
import { MtColHeaderComponent } from '../components/mt-col-header/mt-col-header.component';
import { MtPagingComponent } from '../components/mt-paging/mt-paging.component';
import { MtTableComponent } from '../components/mt-table/mt-table.component';
import { ParseColumnParamsPipe } from '../pipes/parse-column-params.pipe';
import { ParseDotNotationPipe } from '../pipes/parse-dot-notation.pipe';

const declarations = [MtTableComponent, MtPagingComponent, MtColHeaderComponent];
const imports = [CommonModule, FontAwesomeModule, TemplateHolderModule, PotaraModule];

/**
 * Table handler module
 */
@NgModule({
  declarations: [...declarations, ParseColumnParamsPipe, ParseDotNotationPipe],
  imports,
  exports: [...declarations]
})
export class TableManagementModule {}
