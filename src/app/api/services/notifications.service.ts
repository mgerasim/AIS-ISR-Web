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

import { Notification } from '../models/notification';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiNotificationsGet
   */
  static readonly ApiNotificationsGetPath = '/api/Notifications';

  /**
   * Получает список уведомлений.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotificationsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationsGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Notification>>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationsService.ApiNotificationsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Notification>>;
      })
    );
  }

  /**
   * Получает список уведомлений.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiNotificationsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationsGet$Plain(params?: {
  }): Observable<Array<Notification>> {

    return this.apiNotificationsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Notification>>) => r.body as Array<Notification>)
    );
  }

  /**
   * Получает список уведомлений.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotificationsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationsGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Notification>>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationsService.ApiNotificationsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Notification>>;
      })
    );
  }

  /**
   * Получает список уведомлений.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiNotificationsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationsGet$Json(params?: {
  }): Observable<Array<Notification>> {

    return this.apiNotificationsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Notification>>) => r.body as Array<Notification>)
    );
  }

  /**
   * Path part for operation apiNotificationsPost
   */
  static readonly ApiNotificationsPostPath = '/api/Notifications';

  /**
   * Создает уведомление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotificationsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotificationsPost$Plain$Response(params?: {
    body?: Notification
  }): Observable<StrictHttpResponse<Notification>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationsService.ApiNotificationsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Notification>;
      })
    );
  }

  /**
   * Создает уведомление.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiNotificationsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotificationsPost$Plain(params?: {
    body?: Notification
  }): Observable<Notification> {

    return this.apiNotificationsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Notification>) => r.body as Notification)
    );
  }

  /**
   * Создает уведомление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotificationsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotificationsPost$Json$Response(params?: {
    body?: Notification
  }): Observable<StrictHttpResponse<Notification>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationsService.ApiNotificationsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Notification>;
      })
    );
  }

  /**
   * Создает уведомление.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiNotificationsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotificationsPost$Json(params?: {
    body?: Notification
  }): Observable<Notification> {

    return this.apiNotificationsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Notification>) => r.body as Notification)
    );
  }

  /**
   * Path part for operation apiNotificationsIdGet
   */
  static readonly ApiNotificationsIdGetPath = '/api/Notifications/{id}';

  /**
   * Получает уведомление по идентификатору.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotificationsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationsIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Notification>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationsService.ApiNotificationsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Notification>;
      })
    );
  }

  /**
   * Получает уведомление по идентификатору.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiNotificationsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationsIdGet$Plain(params: {
    id: number;
  }): Observable<Notification> {

    return this.apiNotificationsIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Notification>) => r.body as Notification)
    );
  }

  /**
   * Получает уведомление по идентификатору.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotificationsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationsIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Notification>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationsService.ApiNotificationsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Notification>;
      })
    );
  }

  /**
   * Получает уведомление по идентификатору.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiNotificationsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationsIdGet$Json(params: {
    id: number;
  }): Observable<Notification> {

    return this.apiNotificationsIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Notification>) => r.body as Notification)
    );
  }

  /**
   * Path part for operation apiNotificationsIdPut
   */
  static readonly ApiNotificationsIdPutPath = '/api/Notifications/{id}';

  /**
   * Обновляет уведомление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotificationsIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotificationsIdPut$Response(params: {
    id: number;
    body?: Notification
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationsService.ApiNotificationsIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiNotificationsIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotificationsIdPut(params: {
    id: number;
    body?: Notification
  }): Observable<void> {

    return this.apiNotificationsIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiNotificationsIdDelete
   */
  static readonly ApiNotificationsIdDeletePath = '/api/Notifications/{id}';

  /**
   * Удаляет уведомление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotificationsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationsIdDelete$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationsService.ApiNotificationsIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiNotificationsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNotificationsIdDelete(params: {
    id: number;
  }): Observable<void> {

    return this.apiNotificationsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
