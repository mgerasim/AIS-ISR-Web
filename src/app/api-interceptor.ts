import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {AuthService} from './auth/auth.service';
import {token} from '@progress/kendo-angular-inputs/dist/es2015/maskedtextbox/parsing/parsers';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  public constructor(
    private authService: AuthService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('Выполняем запрос:');
    console.log(req.url);
    console.log('Токен:');
    console.log(this.authService.token);
    if (this.authService.token !== undefined) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.token}`
        },
        withCredentials: true
      });
    }

    // Also handle errors globally
    return next.handle(req).pipe(
      tap(x => x, err => {
        // Handle this err
        console.error(`Error performing request, status code = ${err.status}`);
        console.error(err);
      })
    );
  }
}
