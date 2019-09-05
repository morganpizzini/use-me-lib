import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormeTemplateDirective } from '../directives/forme-template-directive';
import { FormeTemplateService } from '../services/forme-template-service';

/**
 * template holder module
 */
@NgModule({
  declarations: [FormeTemplateDirective],
  exports: [FormeTemplateDirective]
})
export class TemplateHolderModule {
  /**
   * for root implementation
   */
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: TemplateHolderModule,
      providers: [FormeTemplateService]
    };
  }
}
