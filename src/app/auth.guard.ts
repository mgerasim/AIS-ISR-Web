import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {NavigatorService} from './core/routing/navigator.service';
import {AuthService} from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private navigatorService: NavigatorService,
    private authService: AuthService
  ) {  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log('AuthGuard');
    if (!this.authService.isLogged) {
      this.navigatorService.toSignIn();
    }
    return this.authService.isLogged;
  }

}
