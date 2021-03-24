import {Injectable} from '@angular/core';
import {from, merge, Observable, of} from 'rxjs';
import {catchError, filter, finalize, map, mergeAll, shareReplay, switchMap, tap} from 'rxjs/operators';
import {ServerHubService} from './server-hub';
import {SubscribeOperation} from '../../api/models/subscribe-operation';

@Injectable({
  providedIn: 'root',
})
export class ServerNotificationsService {
  constructor(private serverHub: ServerHubService) {}

  subscribe<TData>(operation: SubscribeOperation): Observable<TData> {
    return this.subscribeInternal(operation).pipe(
      map(jsonData => jsonData as TData)
    );
  }

  private subscribeInternal(operation: SubscribeOperation): Observable<any> {
    return from(this.serverHub.subscribe(operation)).pipe(
      tap(data => {
        console.log(`Invoke Data`);
        console.log(data);
      }),
      switchMap(x => merge(of(x), this.serverHub.notifyEvent)),
      filter(
        data =>
          data.operation === operation
      ),
      filter(
        data =>
          data.data !== null
      ),
      map(data => data.data),
      catchError(error => {
        console.error(error);
        return of('');
      }),
      shareReplay(1),
      finalize(() => {
        this.serverHub
          .unsubscribe(operation)
          .catch(error => console.error(error));
      })
    );
  }
}
