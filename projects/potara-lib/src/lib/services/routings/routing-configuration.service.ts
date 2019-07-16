// import { Injectable, Inject } from '@angular/core';
// import { ApplicationBackEnd } from './application-backend';

// @Injectable()
// export class RoutingConfigurationService {
//     /**
//      *
//      */
//     constructor(@Inject('bkend') private appBackEnd: ApplicationBackEnd) {
//     }
//     private resolveUrl(name: string) {
//         if (!name) {
//             return '';
//         }
//         const currentUrl = this.appBackEnd.routes[name];
//         if (!currentUrl) {
//             return '';
//         }
//         return this.resolveUrl(currentUrl.base) + '/' + currentUrl.url;
//     }
//     public url(name: string, parm1?, parm2?, parm3?) {

//         // let compiledUrl = this.env.apiBaseUrl + this.resolveUrl(name);
//         // work with partial urls
//         let compiledUrl = this.appBackEnd.routePrefix ? `${this.appBackEnd.routePrefix}` : '';
//         // resolve url name
//         // if (typeof name === 'string') {
//             compiledUrl += this.resolveUrl(name);
//         // } else {
//         //     compiledUrl += this.resolveUrl(this.routePointer[name]);
//         // }
//         if (parm1) {
//             compiledUrl += '/' + parm1;
//         }
//         if (parm2) {
//             compiledUrl += '/' + parm2;
//         }
//         if (parm3) {
//             compiledUrl += '/' + parm3;
//         }
//         return compiledUrl;
//     }
// }
