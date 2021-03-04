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

import { ResponsibilityCenter } from '../models/responsibility-center';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiUsersGet
   */
  static readonly ApiUsersGetPath = '/api/Users';

  /**
   * Получает список уведомлений.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<User>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<User>>;
      })
    );
  }

  /**
   * Получает список уведомлений.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGet$Plain(params?: {
  }): Observable<Array<User>> {

    return this.apiUsersGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<User>>) => r.body as Array<User>)
    );
  }

  /**
   * Получает список уведомлений.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<User>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<User>>;
      })
    );
  }

  /**
   * Получает список уведомлений.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGet$Json(params?: {
  }): Observable<Array<User>> {

    return this.apiUsersGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<User>>) => r.body as Array<User>)
    );
  }

  /**
   * Path part for operation apiUsersPost
   */
  static readonly ApiUsersPostPath = '/api/Users';

  /**
   * Создает уведомление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsersPost$Plain$Response(params?: {
    body?: User
  }): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * Создает уведомление.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsersPost$Plain(params?: {
    body?: User
  }): Observable<User> {

    return this.apiUsersPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Создает уведомление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsersPost$Json$Response(params?: {
    body?: User
  }): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * Создает уведомление.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsersPost$Json(params?: {
    body?: User
  }): Observable<User> {

    return this.apiUsersPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Path part for operation apiUsersIdGet
   */
  static readonly ApiUsersIdGetPath = '/api/Users/{id}';

  /**
   * Получает уведомление по идентификатору.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * Получает уведомление по идентификатору.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersIdGet$Plain(params: {
    id: number;
  }): Observable<User> {

    return this.apiUsersIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Получает уведомление по идентификатору.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * Получает уведомление по идентификатору.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersIdGet$Json(params: {
    id: number;
  }): Observable<User> {

    return this.apiUsersIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Path part for operation apiUsersIdPut
   */
  static readonly ApiUsersIdPutPath = '/api/Users/{id}';

  /**
   * Обновляет уведомление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsersIdPut$Response(params: {
    id: number;
    body?: User
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiUsersIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsersIdPut(params: {
    id: number;
    body?: User
  }): Observable<void> {

    return this.apiUsersIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiUsersIdDelete
   */
  static readonly ApiUsersIdDeletePath = '/api/Users/{id}';

  /**
   * Удаляет уведомление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersIdDelete$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiUsersIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersIdDelete(params: {
    id: number;
  }): Observable<void> {

    return this.apiUsersIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiUsersResponsibilityCenterIdPut
   */
  static readonly ApiUsersResponsibilityCenterIdPutPath = '/api/Users/responsibilityCenter/{id}';

  /**
   * Устанавливает центры ответсвенности для пользователя.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersResponsibilityCenterIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsersResponsibilityCenterIdPut$Plain$Response(params: {

    /**
     * Идентификатор пользователя.
     */
    id: number;

    /**
     * Центры ответсвенности.
     */
    body?: Array<ResponsibilityCenter>
  }): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersResponsibilityCenterIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * Устанавливает центры ответсвенности для пользователя.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersResponsibilityCenterIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsersResponsibilityCenterIdPut$Plain(params: {

    /**
     * Идентификатор пользователя.
     */
    id: number;

    /**
     * Центры ответсвенности.
     */
    body?: Array<ResponsibilityCenter>
  }): Observable<User> {

    return this.apiUsersResponsibilityCenterIdPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Устанавливает центры ответсвенности для пользователя.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersResponsibilityCenterIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsersResponsibilityCenterIdPut$Json$Response(params: {

    /**
     * Идентификатор пользователя.
     */
    id: number;

    /**
     * Центры ответсвенности.
     */
    body?: Array<ResponsibilityCenter>
  }): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersResponsibilityCenterIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * Устанавливает центры ответсвенности для пользователя.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersResponsibilityCenterIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsersResponsibilityCenterIdPut$Json(params: {

    /**
     * Идентификатор пользователя.
     */
    id: number;

    /**
     * Центры ответсвенности.
     */
    body?: Array<ResponsibilityCenter>
  }): Observable<User> {

    return this.apiUsersResponsibilityCenterIdPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

}
