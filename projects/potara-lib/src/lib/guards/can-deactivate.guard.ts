import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { CanComponentDeactivate } from './can-component-deactivate';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component: CanComponentDeactivate,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Promise<boolean> | Observable<boolean> | boolean {

        // const url: string = state.url;
        // console.log('Url: ' + url);

        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
