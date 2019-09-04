import { Directive, Input, OnInit, TemplateRef } from '@angular/core';
import { FormeTemplateService } from '../services/forme-template-service';

/**
 * ng-template directive
 */
@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[formeTemplate]'
})
export class FormeTemplateDirective implements OnInit {
  /**
   * form template input
   */
  @Input('formeTemplate') templateId;

  /**
   * constructor
   */
  constructor(private host: TemplateRef<any>, private service: FormeTemplateService) {}

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this.service.register(this.templateId, this.host);
  }
}
