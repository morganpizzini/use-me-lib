import { Injectable, TemplateRef } from '@angular/core';
import { FormeTemplate } from '../models/forme-template';

/**
 * form template storage service
 */
@Injectable()
export class FormeTemplateService {
  /**
   * stored tamplate
   */
  private templates: FormeTemplate[];

  /**
   * constructor
   */
  constructor() {
    this.templates = new Array();
  }

  /**
   * registration
   */
  register(id: string, ref: TemplateRef<any>) {
    // create new template object
    const newTemplateObj = new FormeTemplate(id, ref);

    // looking for template
    const existingTemplateIndex = this.templates.findIndex(t => t.id === id);

    // override templates with same identifier
    if (existingTemplateIndex > -1) {
      this.templates[existingTemplateIndex] = newTemplateObj;
    } else {
      this.templates.push(newTemplateObj);
    }
  }

  /**
   * get register template
   */
  getTemplateRef(templateId: string): TemplateRef<any> {
    const template = this.templates.find(t => t.id === templateId);
    return template ? template.ref : null;
  }
}
