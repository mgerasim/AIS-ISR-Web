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

import { Incident } from '../models/incident';

@Injectable({
  providedIn: 'root',
})
export class IncidentsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiIncidentsGet
   */
  static readonly ApiIncidentsGetPath = '/api/Incidents';

  /**
   * Получает список уведомлений.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIncidentsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIncidentsGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Incident>>> {

    const rb = new RequestBuilder(this.rootUrl, IncidentsService.ApiIncidentsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Incident>>;
      })
    );
  }

  /**
   * Получает список уведомлений.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiIncidentsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIncidentsGet$Plain(params?: {
  }): Observable<Array<Incident>> {

    return this.apiIncidentsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Incident>>) => r.body as Array<Incident>)
    );
  }

  /**
   * Получает список уведомлений.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIncidentsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIncidentsGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Incident>>> {

    const rb = new RequestBuilder(this.rootUrl, IncidentsService.ApiIncidentsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Incident>>;
      })
    );
  }

  /**
   * Получает список уведомлений.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiIncidentsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIncidentsGet$Json(params?: {
  }): Observable<Array<Incident>> {

    return this.apiIncidentsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Incident>>) => r.body as Array<Incident>)
    );
  }

  /**
   * Path part for operation apiIncidentsPost
   */
  static readonly ApiIncidentsPostPath = '/api/Incidents';

  /**
   * Создает уведомление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIncidentsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiIncidentsPost$Plain$Response(params?: {
    body?: Incident
  }): Observable<StrictHttpResponse<Incident>> {

    const rb = new RequestBuilder(this.rootUrl, IncidentsService.ApiIncidentsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Incident>;
      })
    );
  }

  /**
   * Создает уведомление.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiIncidentsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiIncidentsPost$Plain(params?: {
    body?: Incident
  }): Observable<Incident> {

    return this.apiIncidentsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Incident>) => r.body as Incident)
    );
  }

  /**
   * Создает уведомление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIncidentsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiIncidentsPost$Json$Response(params?: {
    body?: Incident
  }): Observable<StrictHttpResponse<Incident>> {

    const rb = new RequestBuilder(this.rootUrl, IncidentsService.ApiIncidentsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Incident>;
      })
    );
  }

  /**
   * Создает уведомление.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiIncidentsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiIncidentsPost$Json(params?: {
    body?: Incident
  }): Observable<Incident> {

    return this.apiIncidentsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Incident>) => r.body as Incident)
    );
  }

  /**
   * Path part for operation apiIncidentsIdGet
   */
  static readonly ApiIncidentsIdGetPath = '/api/Incidents/{id}';

  /**
   * Получает уведомление по идентификатору.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIncidentsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIncidentsIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Incident>> {

    const rb = new RequestBuilder(this.rootUrl, IncidentsService.ApiIncidentsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Incident>;
      })
    );
  }

  /**
   * Получает уведомление по идентификатору.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiIncidentsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIncidentsIdGet$Plain(params: {
    id: number;
  }): Observable<Incident> {

    return this.apiIncidentsIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Incident>) => r.body as Incident)
    );
  }

  /**
   * Получает уведомление по идентификатору.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIncidentsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIncidentsIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Incident>> {

    const rb = new RequestBuilder(this.rootUrl, IncidentsService.ApiIncidentsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Incident>;
      })
    );
  }

  /**
   * Получает уведомление по идентификатору.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiIncidentsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIncidentsIdGet$Json(params: {
    id: number;
  }): Observable<Incident> {

    return this.apiIncidentsIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Incident>) => r.body as Incident)
    );
  }

  /**
   * Path part for operation apiIncidentsIdPut
   */
  static readonly ApiIncidentsIdPutPath = '/api/Incidents/{id}';

  /**
   * Обновляет уведомление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIncidentsIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiIncidentsIdPut$Response(params: {
    id: number;
    body?: Incident
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, IncidentsService.ApiIncidentsIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiIncidentsIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiIncidentsIdPut(params: {
    id: number;
    body?: Incident
  }): Observable<void> {

    return this.apiIncidentsIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiIncidentsIdDelete
   */
  static readonly ApiIncidentsIdDeletePath = '/api/Incidents/{id}';

  /**
   * Удаляет уведомление.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIncidentsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIncidentsIdDelete$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, IncidentsService.ApiIncidentsIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiIncidentsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIncidentsIdDelete(params: {
    id: number;
  }): Observable<void> {

    return this.apiIncidentsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
