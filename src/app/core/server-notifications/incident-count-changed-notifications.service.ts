import {Injectable} from '@angular/core';
import {EntityChangedHubService} from './entity-changed-hub.service';
import {from, Observable, of} from 'rxjs';
import {catchError, finalize, map, shareReplay, switchMap} from 'rxjs/operators';
import {ErrorHandlerService} from '../errors/error-handler.service';
import {IncidentCountChangedHubService} from './incident-count-changed-hub.service';

@Injectable({
    providedIn: 'root',
})
export class IncidentCountChangedNotificationsService {
    constructor(
      private hub: IncidentCountChangedHubService,
      private errorHandler: ErrorHandlerService) {}

    subscribeEntityChanged(): Observable<number> {
        return this.subscribe();
    }

    subscribe(): Observable<number> {
        return this.subscribeInternal();
    }

    private subscribeInternal(): Observable<number> {
        return from(this.hub.subscribe()).pipe(
            switchMap(count => {
              this.hub.incidentCountChanged$.next(count);
              return this.hub.incidentCountChanged$;
            }),
            catchError(error => {
                this.errorHandler.handle(error);
                return of(0);
            }),
            shareReplay(1),
            finalize(() => {
                this.hub
                    .unsubscribe()
                    .catch(error => this.errorHandler.handle(error));
            })
        );
    }
}
