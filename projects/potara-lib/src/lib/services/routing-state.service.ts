import { Inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { EnvironmentInterface } from '../interfaces';
import { Environment_Token } from '../tokens/environment-token';

/**
 * Routing state service
 * provide list of no-go-back routes from configuration
 * provide 'noback' in querystring for pop last page.
 */
@Injectable()
export class RoutingState {
  // private history: BehaviorSubject<string[]> = new BehaviorSubject([]);
  private history: BehaviorSubject<string[]> = new BehaviorSubject([]);
  private handleNavigation = false;
  private canGoBack: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private previousUrl = '';

  get canGoBack$(): Observable<boolean> {
    return this.canGoBack.asObservable();
  }

  constructor(
    private router: Router,
    @Inject(Environment_Token) environment: EnvironmentInterface
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(({ urlAfterRedirects }: NavigationEnd) => {
        // i'm in homepage
        if (
          !environment.noGoBackRoutes
            ? urlAfterRedirects === '/' || urlAfterRedirects === ''
            : environment.noGoBackRoutes.indexOf(urlAfterRedirects) > -1
        ) {
          this.canGoBack.next(false);
          this.handleNavigation = false;
          this.history.next([urlAfterRedirects]);
          return;
        }
        let history = this.history.getValue();
        const querystring = urlAfterRedirects.substr(urlAfterRedirects.indexOf('?')).toLowerCase();
        // if navigation come from 'back button' press or
        // querystring contains 'noback'
        // handle it and pop last url from history
        if (this.handleNavigation || querystring.indexOf('noback') >= 0) {
          this.handleNavigation = false;
          history.pop();
        } else {
          history = history.concat([urlAfterRedirects]);
        }
        this.validatePublicProperties(history);
      });
  }

  private validatePublicProperties(history: string[]) {
    this.canGoBack.next(history.length > 1);
    this.previousUrl = history[history.length - 2] || '';
    this.history.next(history);
  }
  goBack() {
    this.handleNavigation = true;
    this.router.navigateByUrl(this.previousUrl);
  }
  getHistory(): BehaviorSubject<string[]> {
    return this.history;
  }
}
