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

import { Account } from '../models/account';

@Injectable({
  providedIn: 'root',
})
export class AccountsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAccountsGet
   */
  static readonly ApiAccountsGetPath = '/api/Accounts';

  /**
   * Получает список вложенных файлов.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountsGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Account>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountsService.ApiAccountsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Account>>;
      })
    );
  }

  /**
   * Получает список вложенных файлов.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAccountsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountsGet$Plain(params?: {
  }): Observable<Array<Account>> {

    return this.apiAccountsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Account>>) => r.body as Array<Account>)
    );
  }

  /**
   * Получает список вложенных файлов.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountsGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Account>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountsService.ApiAccountsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Account>>;
      })
    );
  }

  /**
   * Получает список вложенных файлов.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAccountsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountsGet$Json(params?: {
  }): Observable<Array<Account>> {

    return this.apiAccountsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Account>>) => r.body as Array<Account>)
    );
  }

  /**
   * Path part for operation apiAccountsPost
   */
  static readonly ApiAccountsPostPath = '/api/Accounts';

  /**
   * Создает вложенный файл.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountsPost$Plain$Response(params?: {
    body?: Account
  }): Observable<StrictHttpResponse<Account>> {

    const rb = new RequestBuilder(this.rootUrl, AccountsService.ApiAccountsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Account>;
      })
    );
  }

  /**
   * Создает вложенный файл.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAccountsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountsPost$Plain(params?: {
    body?: Account
  }): Observable<Account> {

    return this.apiAccountsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Account>) => r.body as Account)
    );
  }

  /**
   * Создает вложенный файл.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountsPost$Json$Response(params?: {
    body?: Account
  }): Observable<StrictHttpResponse<Account>> {

    const rb = new RequestBuilder(this.rootUrl, AccountsService.ApiAccountsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Account>;
      })
    );
  }

  /**
   * Создает вложенный файл.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAccountsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountsPost$Json(params?: {
    body?: Account
  }): Observable<Account> {

    return this.apiAccountsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Account>) => r.body as Account)
    );
  }

  /**
   * Path part for operation apiAccountsIdGet
   */
  static readonly ApiAccountsIdGetPath = '/api/Accounts/{id}';

  /**
   * Получает вложенный файл по идентификатору.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountsIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Account>> {

    const rb = new RequestBuilder(this.rootUrl, AccountsService.ApiAccountsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Account>;
      })
    );
  }

  /**
   * Получает вложенный файл по идентификатору.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAccountsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountsIdGet$Plain(params: {
    id: number;
  }): Observable<Account> {

    return this.apiAccountsIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Account>) => r.body as Account)
    );
  }

  /**
   * Получает вложенный файл по идентификатору.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountsIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Account>> {

    const rb = new RequestBuilder(this.rootUrl, AccountsService.ApiAccountsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Account>;
      })
    );
  }

  /**
   * Получает вложенный файл по идентификатору.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAccountsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountsIdGet$Json(params: {
    id: number;
  }): Observable<Account> {

    return this.apiAccountsIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Account>) => r.body as Account)
    );
  }

  /**
   * Path part for operation apiAccountsIdPut
   */
  static readonly ApiAccountsIdPutPath = '/api/Accounts/{id}';

  /**
   * Обновляет вложенный файл.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountsIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountsIdPut$Response(params: {
    id: number;
    body?: Account
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AccountsService.ApiAccountsIdPutPath, 'put');
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
   * Обновляет вложенный файл.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAccountsIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountsIdPut(params: {
    id: number;
    body?: Account
  }): Observable<void> {

    return this.apiAccountsIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAccountsIdDelete
   */
  static readonly ApiAccountsIdDeletePath = '/api/Accounts/{id}';

  /**
   * Удаляет вложенный файл.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountsIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountsIdDelete$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Account>> {

    const rb = new RequestBuilder(this.rootUrl, AccountsService.ApiAccountsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Account>;
      })
    );
  }

  /**
   * Удаляет вложенный файл.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAccountsIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountsIdDelete$Plain(params: {
    id: number;
  }): Observable<Account> {

    return this.apiAccountsIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Account>) => r.body as Account)
    );
  }

  /**
   * Удаляет вложенный файл.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountsIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountsIdDelete$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Account>> {

    const rb = new RequestBuilder(this.rootUrl, AccountsService.ApiAccountsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Account>;
      })
    );
  }

  /**
   * Удаляет вложенный файл.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAccountsIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountsIdDelete$Json(params: {
    id: number;
  }): Observable<Account> {

    return this.apiAccountsIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Account>) => r.body as Account)
    );
  }

}
