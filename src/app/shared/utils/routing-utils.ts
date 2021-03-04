import {map, shareReplay, tap} from 'rxjs/operators';
import {Params} from '@angular/router';
import {pipe} from 'rxjs';

export function shareEntityId(paramName: string = 'id') {
  return pipe(
    map((params: Params): number => +params[paramName]),
    tap(id => {
      if (!id) {
        throw new Error('Идентификатор сущности не задан.');
      }
    }),
    shareReplay()
  );
}
