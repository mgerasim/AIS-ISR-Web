import { Injectable } from '@angular/core';
import {DataServiceError} from '@ngrx/data';
import {HttpErrorResponse} from '@angular/common/http';
import {ResponseError} from './response-error';
import {showError} from '../../shared/utils/message-utils';
import {NotificationService} from '@progress/kendo-angular-notification';
import * as Sentry from '@sentry/browser';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(
    private notificationService: NotificationService
  ) { }

  public handle(error: any, message?: string): void {

    Sentry.captureException(error);

    if (!error) {
      throw new Error('Не удалось обработать ошибку. Ошибка не передана.');
    }



    if (error.ClassName !== undefined) {
      showError(error.Message);
    } else  if (error instanceof DataServiceError) {
      this.handleNgrxDataServiceError(error);
    } else if (error instanceof HttpErrorResponse) {
      this.handleResponseError(error, message);
    } else {
      this.handleUnhandledError(error);
    }
  }

  private handleNgrxDataServiceError(error: DataServiceError): void {
    /*
    if (error.error instanceof DataServiceError) {
      this.handleResponseError(error.error);
    } else {
      this.handleUnhandledError(error);
    }

     */
  }


  private isErrorResponse(response: HttpErrorResponse): boolean {
    return response.status !== undefined && !(response.status >= 200 && response.status < 300);
  }

  private toError(response: HttpErrorResponse): ResponseError {
    if (!response) {
      throw new Error('Не удалось обработать ошибочный ответ на запрос. Ответ на запрос не передана.');
    }

    if (!this.isErrorResponse(response)) {
      throw new Error('Не удалось обработать ошибочный ответ на запрос. Ответ не является ошибочным.');
    }

    return new ResponseError(response);
  }

  private handleResponseError(response: any, message?: string): void {
    if (!response) {
      throw new Error('Не удалось обработать ошибочный ответ на запрос. Ответ на запрос не передана.');
    }

    if (!this.isErrorResponse(response)) {
      throw new Error('Не удалось обработать ошибочный ответ на запрос. Ответ не является ошибочным.');
    }

    /*
    let error: ResponseError;
     */

    if (response instanceof HttpErrorResponse) {
      if (response.status === 400) {
        console.log(response);
        showError(response.error);
        Object.keys(response.error.errors).forEach(key => {
          response.error.errors[key].forEach((message: string) => {
            this.notificationService.show({
              content: message,
              cssClass: 'button-notification',
              animation: { type: 'slide', duration: 400 },
              position: { horizontal: 'right', vertical: 'bottom' },
              type: { style: 'error', icon: true },
              closable: true
            });
          });
        });
      } else {
        this.handleUnhandledError(new ResponseError(response));
      }

    } else {
      this.handleUnhandledError(new ResponseError(response));
    }

    /*
    // Преобразовываем HttpResponseError и HttpResponse в наш класс ResponseError
    if (response instanceof ResponseError) {
      error = response;
    } else {
      error = new ResponseError(response);
    }


    // Обработка ошибки
    if (error.isErrorWithMessageForUser) {
      const errorInfo = error.getLersErrorInfo();
      console.error('Http запрос завершен с ошибкой:', error);
      showError(errorInfo.errorMessage);
    } else if (error.isUnauthorizedError) {
      // Ничего не делаем, пользователь будет перенаправлен на страницу входа, если передано сообщение при получении токена, показываем его.
      console.error('Ошибка авторизации пользователя', error);

    } else if (error.isNetworkError) {
      const serviceUnavailableMessage = 'Сервер не доступен';
      showError(serviceUnavailableMessage);
    } else {
      this.handleUnhandledError(error);
    }

     */
  }

  private handleUnhandledError(error): void {
    const unhandledErrorMessage = 'Необработанная ошибка';
    console.error(unhandledErrorMessage + ':', error);
    showError(unhandledErrorMessage);
  }
}
