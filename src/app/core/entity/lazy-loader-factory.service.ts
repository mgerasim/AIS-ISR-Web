import {Injectable} from "@angular/core";
import {catchError, filter, finalize, mapTo, share, switchMap, tap} from "rxjs/operators";
import {Observable, throwError} from "rxjs";
import {ErrorHandlerService} from "../errors/error-handler.service";

@Injectable({
    providedIn: "root",
})
export class LazyLoaderFactoryService {
    constructor(private errorHandlerService: ErrorHandlerService) {}

    createLoader<T>(loaded: Observable<boolean>, load: () => Observable<T>): Observable<boolean> {
        return loaded.pipe(
            filter(loaded => !loaded),
            switchMap(() => load()),
            catchError(error => {
                this.errorHandlerService.handle(error);
                return throwError(error);
            }),
            // Отмену или завершении операции можно обработать в finalize
            // finalize(() => console.log("Операция отменена")),
            mapTo(true),
            share()
        );
    }
}
