import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MtColHeaderComponent } from '../components/mt-col-header/mt-col-header.component';
import { MtPagingComponent } from '../components/mt-paging/mt-paging.component';
import { MtTableComponent } from '../components/mt-table/mt-table.component';
import { TemplateHolderModule } from '../../template-holder';

const declarations = [MtTableComponent, MtPagingComponent, MtColHeaderComponent];
const imports = [CommonModule, FontAwesomeModule, TemplateHolderModule];

/**
 * Table handler module
 */
@NgModule({
  declarations,
  imports,
  exports: [...declarations]
})
export class TableHandlerModule {}
