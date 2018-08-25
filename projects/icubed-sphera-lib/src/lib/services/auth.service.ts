import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { HttpClientBase } from './common/http-client-base';
// import { UserContract } from '../models/UserContract';
import { LoginContract } from '../models/requests/login-contract';
import { AppConfigurationService } from './routings/routing-configuration.service';
import { UserContract } from '../models/user-contract';
import { EnvironmentInterface } from '../interfaces/environments';
import { ApplicationRoute } from './routings/application-route';

@Injectable()
export class AuthService extends HttpClientBase {

  logInRoute = 'login';
  // creare una classe aposita per validare le stringhe di route..
  // che verrà iniettata all'inizializzazione
  // es:
  // {
  // login:'login'
  // }
  constructor(httpClient: HttpClient, @Inject('env') private env: EnvironmentInterface,
    // @Inject('routes') private routes: ApplicationRoute,
  private appConfiguration: AppConfigurationService) {
    super(httpClient, env.apiBaseUrl);
  }
  /**
      * Executes sign-in on remote platform (ReduxPattern)
      * @param userName User name
      * @param password Password
      */
  public login(contract: LoginContract): Observable<any> {

    // Compose request
    const request: any = {
      userName: contract.username,
      password: contract.password
    };

    // Invoke base method
    return this.invoke('POST', this.appConfiguration.url(this.logInRoute), request);
  }
  /**
       * Executes sign-in on remote platform
       * @param userName User name
       * @param password Password
       */
  public signIn(userName: string, password: string): Observable<UserContract> {

    // Compose request
    const request: any = {
      userName: userName,
      password: password
    };

    // Invoke base method
    return this.invoke('POST', this.appConfiguration.url(this.logInRoute), request);
  }
  logout() {
    return of(true);
  }
}
