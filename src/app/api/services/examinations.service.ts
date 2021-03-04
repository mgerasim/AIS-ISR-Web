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

import { Examination } from '../models/examination';

@Injectable({
  providedIn: 'root',
})
export class ExaminationsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiExaminationsGet
   */
  static readonly ApiExaminationsGetPath = '/api/Examinations';

  /**
   * Получает список экспертиз.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExaminationsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExaminationsGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Examination>>> {

    const rb = new RequestBuilder(this.rootUrl, ExaminationsService.ApiExaminationsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Examination>>;
      })
    );
  }

  /**
   * Получает список экспертиз.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiExaminationsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExaminationsGet$Plain(params?: {
  }): Observable<Array<Examination>> {

    return this.apiExaminationsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Examination>>) => r.body as Array<Examination>)
    );
  }

  /**
   * Получает список экспертиз.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExaminationsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExaminationsGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Examination>>> {

    const rb = new RequestBuilder(this.rootUrl, ExaminationsService.ApiExaminationsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Examination>>;
      })
    );
  }

  /**
   * Получает список экспертиз.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiExaminationsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExaminationsGet$Json(params?: {
  }): Observable<Array<Examination>> {

    return this.apiExaminationsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Examination>>) => r.body as Array<Examination>)
    );
  }

  /**
   * Path part for operation apiExaminationsPost
   */
  static readonly ApiExaminationsPostPath = '/api/Examinations';

  /**
   * Создает экспертизу.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExaminationsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiExaminationsPost$Plain$Response(params?: {
    body?: Examination
  }): Observable<StrictHttpResponse<Examination>> {

    const rb = new RequestBuilder(this.rootUrl, ExaminationsService.ApiExaminationsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Examination>;
      })
    );
  }

  /**
   * Создает экспертизу.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiExaminationsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiExaminationsPost$Plain(params?: {
    body?: Examination
  }): Observable<Examination> {

    return this.apiExaminationsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Examination>) => r.body as Examination)
    );
  }

  /**
   * Создает экспертизу.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExaminationsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiExaminationsPost$Json$Response(params?: {
    body?: Examination
  }): Observable<StrictHttpResponse<Examination>> {

    const rb = new RequestBuilder(this.rootUrl, ExaminationsService.ApiExaminationsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Examination>;
      })
    );
  }

  /**
   * Создает экспертизу.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiExaminationsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiExaminationsPost$Json(params?: {
    body?: Examination
  }): Observable<Examination> {

    return this.apiExaminationsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Examination>) => r.body as Examination)
    );
  }

  /**
   * Path part for operation apiExaminationsIdGet
   */
  static readonly ApiExaminationsIdGetPath = '/api/Examinations/{id}';

  /**
   * Получает экспертизу по идентификатору.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExaminationsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExaminationsIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Examination>> {

    const rb = new RequestBuilder(this.rootUrl, ExaminationsService.ApiExaminationsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Examination>;
      })
    );
  }

  /**
   * Получает экспертизу по идентификатору.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiExaminationsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExaminationsIdGet$Plain(params: {
    id: number;
  }): Observable<Examination> {

    return this.apiExaminationsIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Examination>) => r.body as Examination)
    );
  }

  /**
   * Получает экспертизу по идентификатору.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExaminationsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExaminationsIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Examination>> {

    const rb = new RequestBuilder(this.rootUrl, ExaminationsService.ApiExaminationsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Examination>;
      })
    );
  }

  /**
   * Получает экспертизу по идентификатору.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiExaminationsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExaminationsIdGet$Json(params: {
    id: number;
  }): Observable<Examination> {

    return this.apiExaminationsIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Examination>) => r.body as Examination)
    );
  }

  /**
   * Path part for operation apiExaminationsIdPut
   */
  static readonly ApiExaminationsIdPutPath = '/api/Examinations/{id}';

  /**
   * Обновляет экспертизу.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExaminationsIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiExaminationsIdPut$Response(params: {
    id: number;
    body?: Examination
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ExaminationsService.ApiExaminationsIdPutPath, 'put');
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
   * Обновляет экспертизу.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiExaminationsIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiExaminationsIdPut(params: {
    id: number;
    body?: Examination
  }): Observable<void> {

    return this.apiExaminationsIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiExaminationsIdDelete
   */
  static readonly ApiExaminationsIdDeletePath = '/api/Examinations/{id}';

  /**
   * Удаляет экспертизу.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExaminationsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExaminationsIdDelete$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ExaminationsService.ApiExaminationsIdDeletePath, 'delete');
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
   * Удаляет экспертизу.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiExaminationsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExaminationsIdDelete(params: {
    id: number;
  }): Observable<void> {

    return this.apiExaminationsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
