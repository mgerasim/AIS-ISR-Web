import { Injectable } from '@angular/core';
import { AuthService as AuthServiceApi } from '../api/services/auth.service';
import {BehaviorSubject, combineLatest, from, Observable, of} from 'rxjs';
import {AuthResponse} from '../api/models/auth-response';
import {User} from '../api/models/user';
import {filter, switchMap, tap} from 'rxjs/operators';
import {token} from '@progress/kendo-angular-inputs/dist/es2015/maskedtextbox/parsing/parsers';
import {AccountsService} from '../api/services/accounts.service';
import {AuthRequest} from "../api/models/auth-request";
import {ErrorHandlerService} from "../core/errors/error-handler.service";
import {EntityChangedSubscriberService} from "../core/entity/entity-changed-subscriber.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser$ = new BehaviorSubject<User>(null);

  public token?: string = undefined;

  constructor(
    private authServiceApi: AuthServiceApi,
    private accountsService: AccountsService,
  ) { }

  public get currentUser(): User {
    return this.currentUser$.value;
  }

  public get isLogged(): boolean {
    return !!this.currentUser;
  }

  public signOut(): void {
    this.currentUser$.next(null);
    this.token = undefined;
  }

  public signIn(authRequest: AuthRequest): Observable<any> {
    return this.authServiceApi.apiAuthSignInPost$Json({body: authRequest})
      .pipe(
        tap((response) =>
          this.token = response.token)
      );
  }

  public signInCompleted(response: AuthResponse) {
    this.currentUser$.next(response.user);
  }

  public auth(): Observable<any> {
    return this.authServiceApi.apiAuthLoginGet$Json().pipe(
    //return this.authServiceApi.apiAuthSignInGet$Json().pipe(
      tap(response => {
        if (response === null) {
          return
        }
        if (response.user === undefined) {
          throw Error(`В ответе от сервера не указан пользователь: ${response}`);
        }
        this.token = response.token;
      }),
      switchMap(response => combineLatest([
        of(response?.user),
        response ? this.accountsService.apiAccountsIdGet$Json({id: response.user.accountId})
          : of(undefined)
      ])),
      tap(([user, account]) => {
        if (user === undefined && account === undefined) {
          this.currentUser$.next(undefined);
          return;
        }
        user.account = account;
        this.currentUser$.next(user);
      })
    );
  }
}
