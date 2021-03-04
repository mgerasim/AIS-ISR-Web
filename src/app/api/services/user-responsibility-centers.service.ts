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

import { UserResponsibilityCenter } from '../models/user-responsibility-center';

@Injectable({
  providedIn: 'root',
})
export class UserResponsibilityCentersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiUserResponsibilityCentersGet
   */
  static readonly ApiUserResponsibilityCentersGetPath = '/api/UserResponsibilityCenters';

  /**
   * Получает список уведомлений.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserResponsibilityCentersGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserResponsibilityCentersGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<UserResponsibilityCenter>>> {

    const rb = new RequestBuilder(this.rootUrl, UserResponsibilityCentersService.ApiUserResponsibilityCentersGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserResponsibilityCenter>>;
      })
    );
  }

  /**
   * Получает список уведомлений.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserResponsibilityCentersGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserResponsibilityCentersGet$Plain(params?: {
  }): Observable<Array<UserResponsibilityCenter>> {

    return this.apiUserResponsibilityCentersGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserResponsibilityCenter>>) => r.body as Array<UserResponsibilityCenter>)
    );
  }

  /**
   * Получает список уведомлений.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserResponsibilityCentersGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserResponsibilityCentersGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<UserResponsibilityCenter>>> {

    const rb = new RequestBuilder(this.rootUrl, UserResponsibilityCentersService.ApiUserResponsibilityCentersGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserResponsibilityCenter>>;
      })
    );
  }

  /**
   * Получает список уведомлений.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserResponsibilityCentersGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserResponsibilityCentersGet$Json(params?: {
  }): Observable<Array<UserResponsibilityCenter>> {

    return this.apiUserResponsibilityCentersGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserResponsibilityCenter>>) => r.body as Array<UserResponsibilityCenter>)
    );
  }

  /**
   * Path part for operation apiUserResponsibilityCentersPost
   */
  static readonly ApiUserResponsibilityCentersPostPath = '/api/UserResponsibilityCenters';

  /**
   * Создает уведомление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserResponsibilityCentersPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserResponsibilityCentersPost$Plain$Response(params?: {
    body?: UserResponsibilityCenter
  }): Observable<StrictHttpResponse<UserResponsibilityCenter>> {

    const rb = new RequestBuilder(this.rootUrl, UserResponsibilityCentersService.ApiUserResponsibilityCentersPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserResponsibilityCenter>;
      })
    );
  }

  /**
   * Создает уведомление.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserResponsibilityCentersPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserResponsibilityCentersPost$Plain(params?: {
    body?: UserResponsibilityCenter
  }): Observable<UserResponsibilityCenter> {

    return this.apiUserResponsibilityCentersPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UserResponsibilityCenter>) => r.body as UserResponsibilityCenter)
    );
  }

  /**
   * Создает уведомление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserResponsibilityCentersPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserResponsibilityCentersPost$Json$Response(params?: {
    body?: UserResponsibilityCenter
  }): Observable<StrictHttpResponse<UserResponsibilityCenter>> {

    const rb = new RequestBuilder(this.rootUrl, UserResponsibilityCentersService.ApiUserResponsibilityCentersPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserResponsibilityCenter>;
      })
    );
  }

  /**
   * Создает уведомление.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserResponsibilityCentersPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserResponsibilityCentersPost$Json(params?: {
    body?: UserResponsibilityCenter
  }): Observable<UserResponsibilityCenter> {

    return this.apiUserResponsibilityCentersPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<UserResponsibilityCenter>) => r.body as UserResponsibilityCenter)
    );
  }

  /**
   * Path part for operation apiUserResponsibilityCentersIdGet
   */
  static readonly ApiUserResponsibilityCentersIdGetPath = '/api/UserResponsibilityCenters/{id}';

  /**
   * Получает уведомление по идентификатору.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserResponsibilityCentersIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserResponsibilityCentersIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<UserResponsibilityCenter>> {

    const rb = new RequestBuilder(this.rootUrl, UserResponsibilityCentersService.ApiUserResponsibilityCentersIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserResponsibilityCenter>;
      })
    );
  }

  /**
   * Получает уведомление по идентификатору.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserResponsibilityCentersIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserResponsibilityCentersIdGet$Plain(params: {
    id: number;
  }): Observable<UserResponsibilityCenter> {

    return this.apiUserResponsibilityCentersIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UserResponsibilityCenter>) => r.body as UserResponsibilityCenter)
    );
  }

  /**
   * Получает уведомление по идентификатору.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserResponsibilityCentersIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserResponsibilityCentersIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<UserResponsibilityCenter>> {

    const rb = new RequestBuilder(this.rootUrl, UserResponsibilityCentersService.ApiUserResponsibilityCentersIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserResponsibilityCenter>;
      })
    );
  }

  /**
   * Получает уведомление по идентификатору.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserResponsibilityCentersIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserResponsibilityCentersIdGet$Json(params: {
    id: number;
  }): Observable<UserResponsibilityCenter> {

    return this.apiUserResponsibilityCentersIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<UserResponsibilityCenter>) => r.body as UserResponsibilityCenter)
    );
  }

  /**
   * Path part for operation apiUserResponsibilityCentersIdPut
   */
  static readonly ApiUserResponsibilityCentersIdPutPath = '/api/UserResponsibilityCenters/{id}';

  /**
   * Обновляет уведомление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserResponsibilityCentersIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserResponsibilityCentersIdPut$Response(params: {
    id: number;
    body?: UserResponsibilityCenter
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserResponsibilityCentersService.ApiUserResponsibilityCentersIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiUserResponsibilityCentersIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserResponsibilityCentersIdPut(params: {
    id: number;
    body?: UserResponsibilityCenter
  }): Observable<void> {

    return this.apiUserResponsibilityCentersIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiUserResponsibilityCentersIdDelete
   */
  static readonly ApiUserResponsibilityCentersIdDeletePath = '/api/UserResponsibilityCenters/{id}';

  /**
   * Удаляет уведомление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserResponsibilityCentersIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserResponsibilityCentersIdDelete$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserResponsibilityCentersService.ApiUserResponsibilityCentersIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiUserResponsibilityCentersIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserResponsibilityCentersIdDelete(params: {
    id: number;
  }): Observable<void> {

    return this.apiUserResponsibilityCentersIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
