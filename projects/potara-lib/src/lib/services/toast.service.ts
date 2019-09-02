import { Injectable, EventEmitter } from '@angular/core';
// import * as toast from 'toastr';
import * as  toast from 'toastr';
// declare var toast: any;
@Injectable()
export class ToastService {

    codeToast: EventEmitter<string> = new EventEmitter();

    constructor() {
        // toast.options = {
        //     'positionClass': 'toast-top-center'
        // };
        toast.options.positionClass = 'toast-top-center';
    }

    /**
     * Show an info taost message
     * @param message  message to show
     */
    info(message: string): void {
        toast.info(message);
    }

    /**
     * Show a success taost message
     * @param message  message to show
     */
    success(message: string): void {
        toast.success(message);
    }

    /**
     * Show an error taost message
     * @param message  message to show
     */
    error(message: string, title?: string): void {
        toast.error(message, title);
    }

    /**
     * Show a warning taost message
     * @param message  message to show
     */
    warning(message: string, title?: string): void {
        toast.warning(message, title);
    }

    /**
     * Show a coming soon taost message
     * @param message  message to show
     */
    comingSoon(): void {
        toast.info('to be implemented');
    }
}
