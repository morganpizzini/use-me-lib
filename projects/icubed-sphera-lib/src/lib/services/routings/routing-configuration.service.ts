import { Injectable } from '@angular/core';
import { ApplicationRoute } from './application-route';



@Injectable()
export class AppConfigurationService {
    private routePrefix = 'api';
    private urls: ApplicationRoute;
    /**
     *
     */
    constructor(routePrefix: string,
        urls: ApplicationRoute) {
        this.routePrefix = routePrefix;
        this.urls = urls;
    }
    private resolveUrl(name: string) {
        if (!name) {
            return '';
        }
        const currentUrl = this.urls[name];
        if (!currentUrl) {
            return '';
        }
        return this.resolveUrl(currentUrl.base) + '/' + currentUrl.url;
    }
    public url(name: string, parm1?, parm2?, parm3?) {

        // let compiledUrl = this.env.apiBaseUrl + this.resolveUrl(name);
        // work with partial urls
        let compiledUrl = this.routePrefix ? `${this.routePrefix}` : '';
        // resolve url name
        // if (typeof name === 'string') {
            compiledUrl += this.resolveUrl(name);
        // } else {
        //     compiledUrl += this.resolveUrl(this.routePointer[name]);
        // }
        if (parm1) {
            compiledUrl += '/' + parm1;
        }
        if (parm2) {
            compiledUrl += '/' + parm2;
        }
        if (parm3) {
            compiledUrl += '/' + parm3;
        }
        return compiledUrl;
    }
}
