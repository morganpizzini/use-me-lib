import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { HttpClientBase } from './common/http-client-base';
// import { UserContract } from '../models/UserContract';
import { RoutingConfigurationService } from './routings/routing-configuration.service';
import { UserContract } from '../models/user-contract';
import { EnvironmentInterface } from '../interfaces/environments';
import LibRoutes from '../models/library/lib-routes';
import { SignUpRequest } from '../models/requests/signup-request';

@Injectable()
export class AuthService extends HttpClientBase {

  constructor(httpClient: HttpClient, @Inject('env') env: EnvironmentInterface,

    // @Inject('routes') private routes: ApplicationRoute,
    private appConfiguration: RoutingConfigurationService) {
    super(httpClient, env.apiBaseUrl);
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
    return this.invoke('POST', this.appConfiguration.url(LibRoutes.login), request);
  }
  /**
       * Executes sign-up on remote platform
       * @param request Signup request
       */
  public signUp(request: SignUpRequest): Observable<UserContract> {

    // Invoke base method
    return this.invoke('POST', this.appConfiguration.url(LibRoutes.signup), request);
  }
  logout() {
    return of(true);
  }
}
