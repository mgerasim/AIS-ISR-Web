import {Injectable} from '@angular/core';
import {EntityChangedHubService} from './entity-changed-hub.service';
import {from, Observable, of} from 'rxjs';
import {catchError, finalize, map, shareReplay, switchMap} from 'rxjs/operators';
import {ErrorHandlerService} from '../errors/error-handler.service';
import {IncidentCountChangedHubService} from './incident-count-changed-hub.service';
import {ImportResponseHubService} from './import-response-hub.service';
import {ImportResponse} from '../../api/models/import-response';

@Injectable({
    providedIn: 'root',
})
export class ImportResponseNotificationsService {
    constructor(
      private hub: ImportResponseHubService,
      private errorHandler: ErrorHandlerService) {}

    subscribeEntityChanged(): Observable<ImportResponse> {
        return this.subscribe();
    }

    subscribe(): Observable<ImportResponse> {
        return this.subscribeInternal();
    }

    private subscribeInternal(): Observable<ImportResponse> {

        return from(this.hub.subscribe()).pipe(
            switchMap((response) => {
              this.hub.importResponse$.next(response);
              return this.hub.importResponse$;
            }),
            catchError(error => {
                this.errorHandler.handle(error);
                return of({} as ImportResponse);
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
