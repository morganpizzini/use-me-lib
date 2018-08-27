import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class RoutingState {
    // private history: BehaviorSubject<string[]> = new BehaviorSubject([]);
    private history: BehaviorSubject<string[]> = new BehaviorSubject([]);
    public handleNavigation = false;
    public canGoBack = false;
    public previousUrl = '';
    constructor(
        private router: Router
    ) { }

    public loadRouting(): void {
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(({ urlAfterRedirects }: NavigationEnd) => {
                if (urlAfterRedirects === '/' || urlAfterRedirects === '') {
                    this.canGoBack = false;
                    this.handleNavigation = false;
                    this.history.next([urlAfterRedirects]);
                    return;
                }
                let history = this.history.getValue();
                if (this.handleNavigation) {
                    this.handleNavigation = false;
                    history.pop();
                } else {
                    history = history.concat([urlAfterRedirects]);
                }
                this.validatePublicProperties(history);
            });
    }
    private validatePublicProperties(history: string[]) {
        this.canGoBack = history.length > 1;
        this.previousUrl = history[history.length - 2] || '';
        this.history.next(history);
    }
    public goBack() {
        this.handleNavigation = true;
       this.router.navigateByUrl(this.previousUrl);
    }
    public getHistory(): BehaviorSubject<string[]> {
        return this.history;
    }
    // public getPreviousUrl(): string {
    //     const tmp = this.history.getValue();
    //     return tmp[tmp.length - 2] || '';
    // }
}
