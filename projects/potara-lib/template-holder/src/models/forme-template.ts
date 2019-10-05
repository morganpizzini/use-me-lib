import { TemplateRef } from '@angular/core';

/**
 * template wrapper
 */
export class FormeTemplate {
  /**
   *
   */
  constructor(public id: string, public ref: TemplateRef<any>) {}
}
