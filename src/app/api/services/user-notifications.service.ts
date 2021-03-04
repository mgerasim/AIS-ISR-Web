/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { UserNotification } from '../models/user-notification';

@Injectable({
  providedIn: 'root',
})
export class UserNotificationsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiUserNotificationsGet
   */
  static readonly ApiUserNotificationsGetPath = '/api/UserNotifications';

  /**
   * Получает список уведомлений.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserNotificationsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserNotificationsGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<UserNotification>>> {

    const rb = new RequestBuilder(this.rootUrl, UserNotificationsService.ApiUserNotificationsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserNotification>>;
      })
    );
  }

  /**
   * Получает список уведомлений.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserNotificationsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserNotificationsGet$Plain(params?: {
  }): Observable<Array<UserNotification>> {

    return this.apiUserNotificationsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserNotification>>) => r.body as Array<UserNotification>)
    );
  }

  /**
   * Получает список уведомлений.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserNotificationsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserNotificationsGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<UserNotification>>> {

    const rb = new RequestBuilder(this.rootUrl, UserNotificationsService.ApiUserNotificationsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserNotification>>;
      })
    );
  }

  /**
   * Получает список уведомлений.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserNotificationsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserNotificationsGet$Json(params?: {
  }): Observable<Array<UserNotification>> {

    return this.apiUserNotificationsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserNotification>>) => r.body as Array<UserNotification>)
    );
  }

  /**
   * Path part for operation apiUserNotificationsPost
   */
  static readonly ApiUserNotificationsPostPath = '/api/UserNotifications';

  /**
   * Создает уведомление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserNotificationsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserNotificationsPost$Plain$Response(params?: {

    /**
     * Новое пользовательское уведомление.
     */
    body?: UserNotification
  }): Observable<StrictHttpResponse<UserNotification>> {

    const rb = new RequestBuilder(this.rootUrl, UserNotificationsService.ApiUserNotificationsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserNotification>;
      })
    );
  }

  /**
   * Создает уведомление.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserNotificationsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserNotificationsPost$Plain(params?: {

    /**
     * Новое пользовательское уведомление.
     */
    body?: UserNotification
  }): Observable<UserNotification> {

    return this.apiUserNotificationsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UserNotification>) => r.body as UserNotification)
    );
  }

  /**
   * Создает уведомление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserNotificationsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserNotificationsPost$Json$Response(params?: {

    /**
     * Новое пользовательское уведомление.
     */
    body?: UserNotification
  }): Observable<StrictHttpResponse<UserNotification>> {

    const rb = new RequestBuilder(this.rootUrl, UserNotificationsService.ApiUserNotificationsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserNotification>;
      })
    );
  }

  /**
   * Создает уведомление.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserNotificationsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserNotificationsPost$Json(params?: {

    /**
     * Новое пользовательское уведомление.
     */
    body?: UserNotification
  }): Observable<UserNotification> {

    return this.apiUserNotificationsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<UserNotification>) => r.body as UserNotification)
    );
  }

  /**
   * Path part for operation apiUserNotificationsIdGet
   */
  static readonly ApiUserNotificationsIdGetPath = '/api/UserNotifications/{id}';

  /**
   * Получает уведомление по идентификатору.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserNotificationsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserNotificationsIdGet$Plain$Response(params: {

    /**
     * Идентификатор.
     */
    id: number;
  }): Observable<StrictHttpResponse<UserNotification>> {

    const rb = new RequestBuilder(this.rootUrl, UserNotificationsService.ApiUserNotificationsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserNotification>;
      })
    );
  }

  /**
   * Получает уведомление по идентификатору.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserNotificationsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserNotificationsIdGet$Plain(params: {

    /**
     * Идентификатор.
     */
    id: number;
  }): Observable<UserNotification> {

    return this.apiUserNotificationsIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UserNotification>) => r.body as UserNotification)
    );
  }

  /**
   * Получает уведомление по идентификатору.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserNotificationsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserNotificationsIdGet$Json$Response(params: {

    /**
     * Идентификатор.
     */
    id: number;
  }): Observable<StrictHttpResponse<UserNotification>> {

    const rb = new RequestBuilder(this.rootUrl, UserNotificationsService.ApiUserNotificationsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserNotification>;
      })
    );
  }

  /**
   * Получает уведомление по идентификатору.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserNotificationsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserNotificationsIdGet$Json(params: {

    /**
     * Идентификатор.
     */
    id: number;
  }): Observable<UserNotification> {

    return this.apiUserNotificationsIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<UserNotification>) => r.body as UserNotification)
    );
  }

  /**
   * Path part for operation apiUserNotificationsIdPut
   */
  static readonly ApiUserNotificationsIdPutPath = '/api/UserNotifications/{id}';

  /**
   * Обновляет уведомление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserNotificationsIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserNotificationsIdPut$Response(params: {

    /**
     * Идентификатор пользовательского уведомления.
     */
    id: number;

    /**
     * Пользовательское уведомление.
     */
    body?: UserNotification
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserNotificationsService.ApiUserNotificationsIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Обновляет уведомление.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserNotificationsIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserNotificationsIdPut(params: {

    /**
     * Идентификатор пользовательского уведомления.
     */
    id: number;

    /**
     * Пользовательское уведомление.
     */
    body?: UserNotification
  }): Observable<void> {

    return this.apiUserNotificationsIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiUserNotificationsIdDelete
   */
  static readonly ApiUserNotificationsIdDeletePath = '/api/UserNotifications/{id}';

  /**
   * Удаляет уведомление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserNotificationsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserNotificationsIdDelete$Response(params: {

    /**
     * Идентификатор пользовательского уведомления.
     */
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserNotificationsService.ApiUserNotificationsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Удаляет уведомление.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserNotificationsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserNotificationsIdDelete(params: {

    /**
     * Идентификатор пользовательского уведомления.
     */
    id: number;
  }): Observable<void> {

    return this.apiUserNotificationsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiUserNotificationsReadAllPut
   */
  static readonly ApiUserNotificationsReadAllPutPath = '/api/UserNotifications/ReadAll';

  /**
   * Устанавливает все пользовательские уведомления как прочитанные пользователем.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserNotificationsReadAllPut()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserNotificationsReadAllPut$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserNotificationsService.ApiUserNotificationsReadAllPutPath, 'put');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Устанавливает все пользовательские уведомления как прочитанные пользователем.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserNotificationsReadAllPut$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserNotificationsReadAllPut(params?: {
  }): Observable<void> {

    return this.apiUserNotificationsReadAllPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiUserNotificationsDeleteAllDelete
   */
  static readonly ApiUserNotificationsDeleteAllDeletePath = '/api/UserNotifications/DeleteAll';

  /**
   * Удаляет все пользовательские уведомления.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserNotificationsDeleteAllDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserNotificationsDeleteAllDelete$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserNotificationsService.ApiUserNotificationsDeleteAllDeletePath, 'delete');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Удаляет все пользовательские уведомления.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserNotificationsDeleteAllDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserNotificationsDeleteAllDelete(params?: {
  }): Observable<void> {

    return this.apiUserNotificationsDeleteAllDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
