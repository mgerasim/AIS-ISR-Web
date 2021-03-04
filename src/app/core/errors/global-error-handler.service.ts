import {ErrorHandler, Injectable, Injector} from '@angular/core';
import {ErrorHandlerService} from './error-handler.service';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(private injector: Injector) {
    window.onerror = error => {
      console.log('DOM window onError handler called');
      const errorHandlerService = this.injector.get(ErrorHandlerService);
      errorHandlerService.handle(error);
    };
  }

  handleError(error: any): void {
    const errorHandlerService = this.injector.get(ErrorHandlerService);
    errorHandlerService.handle(error);
  }
}
