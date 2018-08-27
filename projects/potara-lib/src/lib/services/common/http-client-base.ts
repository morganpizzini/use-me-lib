import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


/**
 * Base abstract class for HTTP service
 */
export abstract class HttpClientBase {

    constructor(
        private httpClient: HttpClient,
        private apiBaseUrl: string) {
    }

    /**
     * Starts an HTTP invoke on remote service
     * @param method Method
     * @param partialUrl Partial url
     * @param body Body of request
     * @param headers Custom headers
     */
    protected invoke<TResponse>(method: string, partialUrl: string, body: object): Observable<TResponse> {

        // Create observable source
        const observableSource = new Subject<TResponse>();

        // Declare observable
        const observable: Observable<any> = observableSource.asObservable();

        // Compose full url
        const fullUrl = this.apiBaseUrl + partialUrl;

        // Compose options
        const options = {
            body: !body ? null : JSON.stringify(body),
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
