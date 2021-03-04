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

import { CorrectiveAction } from '../models/corrective-action';

@Injectable({
  providedIn: 'root',
})
export class CorrectiveActionsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCorrectiveActionsGet
   */
  static readonly ApiCorrectiveActionsGetPath = '/api/CorrectiveActions';

  /**
   * Получает список корректирующих мероприятий.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCorrectiveActionsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCorrectiveActionsGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<CorrectiveAction>>> {

    const rb = new RequestBuilder(this.rootUrl, CorrectiveActionsService.ApiCorrectiveActionsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CorrectiveAction>>;
      })
    );
  }

  /**
   * Получает список корректирующих мероприятий.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCorrectiveActionsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCorrectiveActionsGet$Plain(params?: {
  }): Observable<Array<CorrectiveAction>> {

    return this.apiCorrectiveActionsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CorrectiveAction>>) => r.body as Array<CorrectiveAction>)
    );
  }

  /**
   * Получает список корректирующих мероприятий.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCorrectiveActionsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCorrectiveActionsGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<CorrectiveAction>>> {

    const rb = new RequestBuilder(this.rootUrl, CorrectiveActionsService.ApiCorrectiveActionsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CorrectiveAction>>;
      })
    );
  }

  /**
   * Получает список корректирующих мероприятий.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCorrectiveActionsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCorrectiveActionsGet$Json(params?: {
  }): Observable<Array<CorrectiveAction>> {

    return this.apiCorrectiveActionsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CorrectiveAction>>) => r.body as Array<CorrectiveAction>)
    );
  }

  /**
   * Path part for operation apiCorrectiveActionsPost
   */
  static readonly ApiCorrectiveActionsPostPath = '/api/CorrectiveActions';

  /**
   * Создает корректирующее мероприятие.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCorrectiveActionsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCorrectiveActionsPost$Plain$Response(params?: {

    /**
     * Корректирующее мероприятие.
     */
    body?: CorrectiveAction
  }): Observable<StrictHttpResponse<CorrectiveAction>> {

    const rb = new RequestBuilder(this.rootUrl, CorrectiveActionsService.ApiCorrectiveActionsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CorrectiveAction>;
      })
    );
  }

  /**
   * Создает корректирующее мероприятие.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCorrectiveActionsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCorrectiveActionsPost$Plain(params?: {

    /**
     * Корректирующее мероприятие.
     */
    body?: CorrectiveAction
  }): Observable<CorrectiveAction> {

    return this.apiCorrectiveActionsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CorrectiveAction>) => r.body as CorrectiveAction)
    );
  }

  /**
   * Создает корректирующее мероприятие.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCorrectiveActionsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCorrectiveActionsPost$Json$Response(params?: {

    /**
     * Корректирующее мероприятие.
     */
    body?: CorrectiveAction
  }): Observable<StrictHttpResponse<CorrectiveAction>> {

    const rb = new RequestBuilder(this.rootUrl, CorrectiveActionsService.ApiCorrectiveActionsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CorrectiveAction>;
      })
    );
  }

  /**
   * Создает корректирующее мероприятие.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCorrectiveActionsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCorrectiveActionsPost$Json(params?: {

    /**
     * Корректирующее мероприятие.
     */
    body?: CorrectiveAction
  }): Observable<CorrectiveAction> {

    return this.apiCorrectiveActionsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CorrectiveAction>) => r.body as CorrectiveAction)
    );
  }

  /**
   * Path part for operation apiCorrectiveActionsIdGet
   */
  static readonly ApiCorrectiveActionsIdGetPath = '/api/CorrectiveActions/{id}';

  /**
   * Получает корректирующее мероприятие по идентификатору.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCorrectiveActionsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCorrectiveActionsIdGet$Plain$Response(params: {

    /**
     * Идентификатор.
     */
    id: number;
  }): Observable<StrictHttpResponse<CorrectiveAction>> {

    const rb = new RequestBuilder(this.rootUrl, CorrectiveActionsService.ApiCorrectiveActionsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CorrectiveAction>;
      })
    );
  }

  /**
   * Получает корректирующее мероприятие по идентификатору.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCorrectiveActionsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCorrectiveActionsIdGet$Plain(params: {

    /**
     * Идентификатор.
     */
    id: number;
  }): Observable<CorrectiveAction> {

    return this.apiCorrectiveActionsIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CorrectiveAction>) => r.body as CorrectiveAction)
    );
  }

  /**
   * Получает корректирующее мероприятие по идентификатору.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCorrectiveActionsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCorrectiveActionsIdGet$Json$Response(params: {

    /**
     * Идентификатор.
     */
    id: number;
  }): Observable<StrictHttpResponse<CorrectiveAction>> {

    const rb = new RequestBuilder(this.rootUrl, CorrectiveActionsService.ApiCorrectiveActionsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CorrectiveAction>;
      })
    );
  }

  /**
   * Получает корректирующее мероприятие по идентификатору.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCorrectiveActionsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCorrectiveActionsIdGet$Json(params: {

    /**
     * Идентификатор.
     */
    id: number;
  }): Observable<CorrectiveAction> {

    return this.apiCorrectiveActionsIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CorrectiveAction>) => r.body as CorrectiveAction)
    );
  }

  /**
   * Path part for operation apiCorrectiveActionsIdPut
   */
  static readonly ApiCorrectiveActionsIdPutPath = '/api/CorrectiveActions/{id}';

  /**
   * Обновляет корректирующее мероприятие.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCorrectiveActionsIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCorrectiveActionsIdPut$Response(params: {

    /**
     * Идентификатор.
     */
    id: number;

    /**
     * Корректирующее мероприятие.
     */
    body?: CorrectiveAction
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CorrectiveActionsService.ApiCorrectiveActionsIdPutPath, 'put');
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
   * Обновляет корректирующее мероприятие.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCorrectiveActionsIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCorrectiveActionsIdPut(params: {

    /**
     * Идентификатор.
     */
    id: number;

    /**
     * Корректирующее мероприятие.
     */
    body?: CorrectiveAction
  }): Observable<void> {

    return this.apiCorrectiveActionsIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiCorrectiveActionsIdDelete
   */
  static readonly ApiCorrectiveActionsIdDeletePath = '/api/CorrectiveActions/{id}';

  /**
   * Удаляет вложенный файл.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCorrectiveActionsIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCorrectiveActionsIdDelete$Plain$Response(params: {

    /**
     * Идентификатор.
     */
    id: number;
  }): Observable<StrictHttpResponse<CorrectiveAction>> {

    const rb = new RequestBuilder(this.rootUrl, CorrectiveActionsService.ApiCorrectiveActionsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CorrectiveAction>;
      })
    );
  }

  /**
   * Удаляет вложенный файл.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCorrectiveActionsIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCorrectiveActionsIdDelete$Plain(params: {

    /**
     * Идентификатор.
     */
    id: number;
  }): Observable<CorrectiveAction> {

    return this.apiCorrectiveActionsIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CorrectiveAction>) => r.body as CorrectiveAction)
    );
  }

  /**
   * Удаляет вложенный файл.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCorrectiveActionsIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCorrectiveActionsIdDelete$Json$Response(params: {

    /**
     * Идентификатор.
     */
    id: number;
  }): Observable<StrictHttpResponse<CorrectiveAction>> {

    const rb = new RequestBuilder(this.rootUrl, CorrectiveActionsService.ApiCorrectiveActionsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CorrectiveAction>;
      })
    );
  }

  /**
   * Удаляет вложенный файл.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCorrectiveActionsIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCorrectiveActionsIdDelete$Json(params: {

    /**
     * Идентификатор.
     */
    id: number;
  }): Observable<CorrectiveAction> {

    return this.apiCorrectiveActionsIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CorrectiveAction>) => r.body as CorrectiveAction)
    );
  }

}
