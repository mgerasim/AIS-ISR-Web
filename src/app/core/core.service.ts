import { Injectable } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {ErrorHandlerService} from './errors/error-handler.service';
import {EntityChangedSubscriberService} from './entity/entity-changed-subscriber.service';
import {switchMap, tap} from 'rxjs/operators';
import {from, of} from 'rxjs';
import {NavigatorService} from "./routing/navigator.service";

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(
    private authService: AuthService,
    private entityChangedSubscriber: EntityChangedSubscriberService,
    private errorHandlerService: ErrorHandlerService,
    private navigatorService: NavigatorService,
  ) { }

  load(): Promise<boolean> {

    return new Promise((resolve, reject) => {
      this.authService.auth()
        .pipe(
         switchMap(() => this.authService.isLogged ? from(this.entityChangedSubscriber.subscribeInitializeAndSetEmptySubs()) : of(undefined)),
         tap(() => this.authService.isLogged ?  this.entityChangedSubscriber.subscribeEntityChanged() : of(undefined))
        )
        .subscribe(response => {
          console.log('response');
        resolve(true);
        console.log('Загрузка завершена');
      }, error => this.errorHandlerService.handle(error));
    });
  }
}
