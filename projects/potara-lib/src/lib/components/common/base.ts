import { ToastService } from '../../services/toast.service';

export abstract class BaseComponent {
  public isBusy = false;
  constructor(protected toast: ToastService) { }

  protected fitStringForRegex(text: string): string {
    return this.escapeRegExp(text).split(' ').join('|');
  }
  protected multiIncludes(text: string, values: string): boolean {
    const re = new RegExp(values);
    return re.test(text);
  }
  protected escapeRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
  }
  protected handleBadResponse(response: any): void {
    // log error in console
    console.error('error on request', response);
    switch (response.status) {
      case 404:
        // call service to prompt warning
        this.toast.warning('Please retry..', 'Ops.. Not found!!');
        break;
      default:
        // call service to prompt error
        this.toast.error('Please retry..', 'Ops.. An error as occured!!');
        break;
    }
    // restore page status on error
    this.isBusy = false;

    // if (!response) {
    //   this.toast.error('Generic error has occured', 'Ops!!');
    //   return;
    // }
    // for (const key in response) {
    //   if (response.hasOwnProperty(key)) {
    //     this.toast.error((<any[]>(response[key])).join('\r\n'), key);
    //   }
    // }
    // this.isBusy = false;
  }
  notImplemented() {
    this.toast.warning('Feature not implemented yet', 'Sorry');
  }
}
