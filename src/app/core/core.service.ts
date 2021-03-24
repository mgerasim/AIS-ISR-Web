import { Injectable } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {ErrorHandlerService} from './errors/error-handler.service';
import {EntityChangedSubscriberService} from './entity/entity-changed-subscriber.service';
import {switchMap, tap} from 'rxjs/operators';
import {from} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(
    private authService: AuthService,
    private entityChangedSubscriber: EntityChangedSubscriberService,
    private errorHandlerService: ErrorHandlerService
  ) { }

  load(): Promise<boolean> {

    return new Promise((resolve, reject) => {
      this.authService.auth()
        .pipe(
          switchMap(() => from(this.entityChangedSubscriber.subscribeInitializeAndSetEmptySubs())),
          tap(() => this.entityChangedSubscriber.subscribeEntityChanged())
        )
        .subscribe(response => {
        resolve(true);
        console.log('Загрузка завершена');
      }, error => this.errorHandlerService.handle(error));
    });
  }
}
