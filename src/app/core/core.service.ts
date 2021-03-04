import { Injectable } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {ErrorHandlerService} from './errors/error-handler.service';
import {EntityChangedSubscriberService} from './entity/entity-changed-subscriber.service';
import {tap} from 'rxjs/operators';
import {Equipment} from '../api/models';

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
          tap(async () => {
            await this.entityChangedSubscriber.subscribeInitializeAndSetEmptySubs();
            this.entityChangedSubscriber.subscribeEntityChanged();
          })
        )
        .subscribe(response => {
        resolve(true);
        console.log(`Авторизованный пользователь: ${response.user}`);
      }, error => this.errorHandlerService.handle(error));
    });
  }
}
