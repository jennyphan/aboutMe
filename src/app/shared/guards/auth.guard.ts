import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('in canactivate');
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        //if (this.router.url === '/register') {
        //    return true;
        //}
        this.router.navigate(['register'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
