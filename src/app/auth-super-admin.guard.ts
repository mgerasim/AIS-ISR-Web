import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth/auth.service';
import {Role} from './api/models/role';
import {showInfo} from './shared/utils/message-utils';
import {NavigatorService} from "./core/routing/navigator.service";

@Injectable({
  providedIn: 'root'
})
export class AuthSuperAdminGuard implements CanActivate {
  constructor(private authService: AuthService,
              private navigatorService: NavigatorService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.authService.isLogged) {
      this.navigatorService.toSignIn();
    }

    return this.authService.isLogged && this.authService.currentUser.account.role === Role.SuperAdmin;
  }
}
