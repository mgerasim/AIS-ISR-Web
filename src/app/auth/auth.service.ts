import { Injectable } from '@angular/core';
import { AuthService as AuthServiceApi } from '../api/services/auth.service';
import {BehaviorSubject, combineLatest, Observable, of} from 'rxjs';
import {AuthResponse} from '../api/models/auth-response';
import {User} from '../api/models/user';
import {switchMap, tap} from 'rxjs/operators';
import {token} from '@progress/kendo-angular-inputs/dist/es2015/maskedtextbox/parsing/parsers';
import {AccountsService} from '../api/services/accounts.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser$ = new BehaviorSubject<User>(null);

  public token?: string = undefined;

  constructor(
    private authServiceApi: AuthServiceApi,
    private accountsService: AccountsService
  ) { }

  public get currentUser(): User {
    return this.currentUser$.value;
  }

  public get isLogged(): boolean {
    return this.currentUser !== null;
  }

  public auth(): Observable<any> {
    //return this.authServiceApi.apiAuthLoginGet$Json().pipe(
    return this.authServiceApi.apiAuthSignInGet$Json().pipe(
      tap(response => {
        if (response.user === undefined) {
          throw Error(`В ответе от сервера не указан пользователь: ${response}`);
        }
        this.token = response.token;
      }),
      switchMap(response => combineLatest([
        of(response.user),
        this.accountsService.apiAccountsIdGet$Json({id: response.user.accountId})
      ])),
      tap(([user, account]) => {
        user.account = account;
        this.currentUser$.next(user);
      })
    );
  }
}
