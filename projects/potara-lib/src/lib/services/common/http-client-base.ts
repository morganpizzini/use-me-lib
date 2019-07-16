import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

/**
 * Base abstract class for HTTP service
 */
export abstract class HttpClientBase {
  constructor(private httpClient: HttpClient, private apiBaseUrl?: string) {}

  // url regular expression check
  private urlRegExp = new RegExp(
    `^(http:\/\/www.|https:\/\/www.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$`
  );

  /**
   * Starts an HTTP invoke on remote service
   * @param method Method
   * @param partialUrl Partial url
   * @param body Body of request
   * @param headers Custom headers
   */
  protected invoke<TResponse>(
    method: string,
    partialUrl: string,
    body: object
  ): Observable<TResponse> {
    // Create observable source
    const observableSource = new Subject<TResponse>();

    // Declare observable
    const observable: Observable<any> = observableSource.asObservable();

    // Compose full url
    // check for partial as full url
    const fullUrl = this.urlRegExp.test(partialUrl) ? partialUrl : this.apiBaseUrl + partialUrl;

    // Compose options
    const options = {
      body: !body ? null : JSON.stringify(body)
    };

    // Invoke remote method
    this.httpClient.request(method, fullUrl, options).subscribe(
      // Success
      (response: any) => {
        // Convert data to target type
        const data: TResponse = response;

        // Apply error on observable and complete
        observableSource.next(data);
        observableSource.complete();
      },

      // Error
      (error: any) => {
        // Apply error on observable and complete
        observableSource.error(error);
        observableSource.complete();
      }
    );

    // Returns observable
    return observable;
  }
}
