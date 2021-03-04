import {HttpErrorResponse} from '@angular/common/http';
import * as HttpStatus from 'http-status-codes';

/**
 * Ошибка загрузки контента.
 */
export class ResponseError {
  get status(): number {
    return this.httpErrorResponse.status;
  }

  get message(): string {
    return this.httpErrorResponse.error
      ? this.httpErrorResponse.error.errorMessage
      : this.httpErrorResponse.message;
  }

  constructor(private httpErrorResponse: HttpErrorResponse) {}

  /**
   * Выдает true если ответ содержит обработанную ошибку с сообщением для пользователя
   * @param response
   */
  get isErrorWithMessageForUser(): boolean {
    // TODO: Добавить обработку NotFound для объектов, которые не существуют.
    // NotFound выдается также если маршрут неправильный, это уже необработанная ошибка.

    return (
      this.status === HttpStatus.UNAUTHORIZED || // 401 Недостаточно прав для выполнения запроса (AccessDenied)
      this.status === HttpStatus.FORBIDDEN || // 403
      this.status === HttpStatus.BAD_REQUEST || // 400
      this.status === HttpStatus.NOT_FOUND || // 404
      this.status === HttpStatus.UNPROCESSABLE_ENTITY
    ); // 422
  }

  get isUnauthorizedError(): boolean {
    return this.status === 401;
  }

  /**
   * Выдает true если ответ содержит ошибку связанную с сетью
   * @param response
   */
  get isNetworkError(): boolean {
    return this.status === 0;
  }

  get isLersErrorWithExtendedError(): string {
    return this.httpErrorResponse.headers.get("X-Lers-Has-extended-error");
  }

  getLersErrorInfo(): {errorMessage: string; code: number} {
    // ResponseParameters
    return this.httpErrorResponse.error;
  }
}
