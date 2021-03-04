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

import { IncidentLog } from '../models/incident-log';

@Injectable({
  providedIn: 'root',
})
export class IncidentLogsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiIncidentLogsGet
   */
  static readonly ApiIncidentLogsGetPath = '/api/IncidentLogs';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIncidentLogsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIncidentLogsGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<IncidentLog>>> {

    const rb = new RequestBuilder(this.rootUrl, IncidentLogsService.ApiIncidentLogsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<IncidentLog>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiIncidentLogsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIncidentLogsGet$Plain(params?: {
  }): Observable<Array<IncidentLog>> {

    return this.apiIncidentLogsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<IncidentLog>>) => r.body as Array<IncidentLog>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIncidentLogsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIncidentLogsGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<IncidentLog>>> {

    const rb = new RequestBuilder(this.rootUrl, IncidentLogsService.ApiIncidentLogsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<IncidentLog>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiIncidentLogsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIncidentLogsGet$Json(params?: {
  }): Observable<Array<IncidentLog>> {

    return this.apiIncidentLogsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<IncidentLog>>) => r.body as Array<IncidentLog>)
    );
  }

  /**
   * Path part for operation apiIncidentLogsPost
   */
  static readonly ApiIncidentLogsPostPath = '/api/IncidentLogs';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIncidentLogsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiIncidentLogsPost$Plain$Response(params?: {
    body?: IncidentLog
  }): Observable<StrictHttpResponse<IncidentLog>> {

    const rb = new RequestBuilder(this.rootUrl, IncidentLogsService.ApiIncidentLogsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IncidentLog>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiIncidentLogsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiIncidentLogsPost$Plain(params?: {
    body?: IncidentLog
  }): Observable<IncidentLog> {

    return this.apiIncidentLogsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IncidentLog>) => r.body as IncidentLog)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIncidentLogsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiIncidentLogsPost$Json$Response(params?: {
    body?: IncidentLog
  }): Observable<StrictHttpResponse<IncidentLog>> {

    const rb = new RequestBuilder(this.rootUrl, IncidentLogsService.ApiIncidentLogsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IncidentLog>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiIncidentLogsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiIncidentLogsPost$Json(params?: {
    body?: IncidentLog
  }): Observable<IncidentLog> {

    return this.apiIncidentLogsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IncidentLog>) => r.body as IncidentLog)
    );
  }

  /**
   * Path part for operation apiIncidentLogsIdGet
   */
  static readonly ApiIncidentLogsIdGetPath = '/api/IncidentLogs/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIncidentLogsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIncidentLogsIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<IncidentLog>> {

    const rb = new RequestBuilder(this.rootUrl, IncidentLogsService.ApiIncidentLogsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IncidentLog>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiIncidentLogsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIncidentLogsIdGet$Plain(params: {
    id: number;
  }): Observable<IncidentLog> {

    return this.apiIncidentLogsIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IncidentLog>) => r.body as IncidentLog)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIncidentLogsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIncidentLogsIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<IncidentLog>> {

    const rb = new RequestBuilder(this.rootUrl, IncidentLogsService.ApiIncidentLogsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IncidentLog>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiIncidentLogsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIncidentLogsIdGet$Json(params: {
    id: number;
  }): Observable<IncidentLog> {

    return this.apiIncidentLogsIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IncidentLog>) => r.body as IncidentLog)
    );
  }

  /**
   * Path part for operation apiIncidentLogsIdPut
   */
  static readonly ApiIncidentLogsIdPutPath = '/api/IncidentLogs/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIncidentLogsIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiIncidentLogsIdPut$Response(params: {
    id: number;
    body?: IncidentLog
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, IncidentLogsService.ApiIncidentLogsIdPutPath, 'put');
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
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiIncidentLogsIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiIncidentLogsIdPut(params: {
    id: number;
    body?: IncidentLog
  }): Observable<void> {

    return this.apiIncidentLogsIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiIncidentLogsIdDelete
   */
  static readonly ApiIncidentLogsIdDeletePath = '/api/IncidentLogs/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIncidentLogsIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIncidentLogsIdDelete$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<IncidentLog>> {

    const rb = new RequestBuilder(this.rootUrl, IncidentLogsService.ApiIncidentLogsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IncidentLog>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiIncidentLogsIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIncidentLogsIdDelete$Plain(params: {
    id: number;
  }): Observable<IncidentLog> {

    return this.apiIncidentLogsIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<IncidentLog>) => r.body as IncidentLog)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiIncidentLogsIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIncidentLogsIdDelete$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<IncidentLog>> {

    const rb = new RequestBuilder(this.rootUrl, IncidentLogsService.ApiIncidentLogsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IncidentLog>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiIncidentLogsIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiIncidentLogsIdDelete$Json(params: {
    id: number;
  }): Observable<IncidentLog> {

    return this.apiIncidentLogsIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<IncidentLog>) => r.body as IncidentLog)
    );
  }

}
