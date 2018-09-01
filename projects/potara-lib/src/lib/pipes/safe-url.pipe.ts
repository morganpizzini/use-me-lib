import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl} from '@angular/platform-browser';

/*
 * Return security trust url
 * Usage:
 *   value | safeUrl
*/
@Pipe({ name: 'safeUrl' })
export class SafeUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
