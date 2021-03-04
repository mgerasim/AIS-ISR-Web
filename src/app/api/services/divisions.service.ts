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

import { Division } from '../models/division';

@Injectable({
  providedIn: 'root',
})
export class DivisionsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiDivisionsGet
   */
  static readonly ApiDivisionsGetPath = '/api/Divisions';

  /**
   * Получает список уведомлений.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDivisionsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDivisionsGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Division>>> {

    const rb = new RequestBuilder(this.rootUrl, DivisionsService.ApiDivisionsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Division>>;
      })
    );
  }

  /**
   * Получает список уведомлений.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiDivisionsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDivisionsGet$Plain(params?: {
  }): Observable<Array<Division>> {

    return this.apiDivisionsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Division>>) => r.body as Array<Division>)
    );
  }

  /**
   * Получает список уведомлений.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDivisionsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDivisionsGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Division>>> {

    const rb = new RequestBuilder(this.rootUrl, DivisionsService.ApiDivisionsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Division>>;
      })
    );
  }

  /**
   * Получает список уведомлений.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiDivisionsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDivisionsGet$Json(params?: {
  }): Observable<Array<Division>> {

    return this.apiDivisionsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Division>>) => r.body as Array<Division>)
    );
  }

  /**
   * Path part for operation apiDivisionsPost
   */
  static readonly ApiDivisionsPostPath = '/api/Divisions';

  /**
   * Создает уведомление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDivisionsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDivisionsPost$Plain$Response(params?: {

    /**
     * Подразделение
     */
    body?: Division
  }): Observable<StrictHttpResponse<Division>> {

    const rb = new RequestBuilder(this.rootUrl, DivisionsService.ApiDivisionsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Division>;
      })
    );
  }

  /**
   * Создает уведомление.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiDivisionsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDivisionsPost$Plain(params?: {

    /**
     * Подразделение
     */
    body?: Division
  }): Observable<Division> {

    return this.apiDivisionsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Division>) => r.body as Division)
    );
  }

  /**
   * Создает уведомление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDivisionsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDivisionsPost$Json$Response(params?: {

    /**
     * Подразделение
     */
    body?: Division
  }): Observable<StrictHttpResponse<Division>> {

    const rb = new RequestBuilder(this.rootUrl, DivisionsService.ApiDivisionsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Division>;
      })
    );
  }

  /**
   * Создает уведомление.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiDivisionsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDivisionsPost$Json(params?: {

    /**
     * Подразделение
     */
    body?: Division
  }): Observable<Division> {

    return this.apiDivisionsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Division>) => r.body as Division)
    );
  }

  /**
   * Path part for operation apiDivisionsIdGet
   */
  static readonly ApiDivisionsIdGetPath = '/api/Divisions/{id}';

  /**
   * Получает уведомление по идентификатору.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDivisionsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDivisionsIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Division>> {

    const rb = new RequestBuilder(this.rootUrl, DivisionsService.ApiDivisionsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Division>;
      })
    );
  }

  /**
   * Получает уведомление по идентификатору.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiDivisionsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDivisionsIdGet$Plain(params: {
    id: number;
  }): Observable<Division> {

    return this.apiDivisionsIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Division>) => r.body as Division)
    );
  }

  /**
   * Получает уведомление по идентификатору.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDivisionsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDivisionsIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Division>> {

    const rb = new RequestBuilder(this.rootUrl, DivisionsService.ApiDivisionsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Division>;
      })
    );
  }

  /**
   * Получает уведомление по идентификатору.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiDivisionsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDivisionsIdGet$Json(params: {
    id: number;
  }): Observable<Division> {

    return this.apiDivisionsIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Division>) => r.body as Division)
    );
  }

  /**
   * Path part for operation apiDivisionsIdPut
   */
  static readonly ApiDivisionsIdPutPath = '/api/Divisions/{id}';

  /**
   * Обновляет уведомление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDivisionsIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDivisionsIdPut$Response(params: {
    id: number;
    body?: Division
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DivisionsService.ApiDivisionsIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiDivisionsIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDivisionsIdPut(params: {
    id: number;
    body?: Division
  }): Observable<void> {

    return this.apiDivisionsIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiDivisionsIdDelete
   */
  static readonly ApiDivisionsIdDeletePath = '/api/Divisions/{id}';

  /**
   * Удаляет подразделение.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDivisionsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDivisionsIdDelete$Response(params: {

    /**
     * Идентификатор подразделения.
     */
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DivisionsService.ApiDivisionsIdDeletePath, 'delete');
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
   * Удаляет подразделение.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiDivisionsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDivisionsIdDelete(params: {

    /**
     * Идентификатор подразделения.
     */
    id: number;
  }): Observable<void> {

    return this.apiDivisionsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
