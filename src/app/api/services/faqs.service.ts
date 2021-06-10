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

import { Faq } from '../models/faq';

@Injectable({
  providedIn: 'root',
})
export class FaqsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiFaqsGet
   */
  static readonly ApiFaqsGetPath = '/api/Faqs';

  /**
   * Получает список вложенных файлов.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFaqsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFaqsGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Faq>>> {

    const rb = new RequestBuilder(this.rootUrl, FaqsService.ApiFaqsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Faq>>;
      })
    );
  }

  /**
   * Получает список вложенных файлов.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiFaqsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFaqsGet$Plain(params?: {
  }): Observable<Array<Faq>> {

    return this.apiFaqsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Faq>>) => r.body as Array<Faq>)
    );
  }

  /**
   * Получает список вложенных файлов.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFaqsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFaqsGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Faq>>> {

    const rb = new RequestBuilder(this.rootUrl, FaqsService.ApiFaqsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Faq>>;
      })
    );
  }

  /**
   * Получает список вложенных файлов.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiFaqsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFaqsGet$Json(params?: {
  }): Observable<Array<Faq>> {

    return this.apiFaqsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Faq>>) => r.body as Array<Faq>)
    );
  }

  /**
   * Path part for operation apiFaqsPost
   */
  static readonly ApiFaqsPostPath = '/api/Faqs';

  /**
   * Создает вложенный файл.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFaqsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFaqsPost$Plain$Response(params?: {
    body?: Faq
  }): Observable<StrictHttpResponse<Faq>> {

    const rb = new RequestBuilder(this.rootUrl, FaqsService.ApiFaqsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Faq>;
      })
    );
  }

  /**
   * Создает вложенный файл.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiFaqsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFaqsPost$Plain(params?: {
    body?: Faq
  }): Observable<Faq> {

    return this.apiFaqsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Faq>) => r.body as Faq)
    );
  }

  /**
   * Создает вложенный файл.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFaqsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFaqsPost$Json$Response(params?: {
    body?: Faq
  }): Observable<StrictHttpResponse<Faq>> {

    const rb = new RequestBuilder(this.rootUrl, FaqsService.ApiFaqsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Faq>;
      })
    );
  }

  /**
   * Создает вложенный файл.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiFaqsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFaqsPost$Json(params?: {
    body?: Faq
  }): Observable<Faq> {

    return this.apiFaqsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Faq>) => r.body as Faq)
    );
  }

  /**
   * Path part for operation apiFaqsIdGet
   */
  static readonly ApiFaqsIdGetPath = '/api/Faqs/{id}';

  /**
   * Получает вложенный файл по идентификатору.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFaqsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFaqsIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Faq>> {

    const rb = new RequestBuilder(this.rootUrl, FaqsService.ApiFaqsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Faq>;
      })
    );
  }

  /**
   * Получает вложенный файл по идентификатору.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiFaqsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFaqsIdGet$Plain(params: {
    id: number;
  }): Observable<Faq> {

    return this.apiFaqsIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Faq>) => r.body as Faq)
    );
  }

  /**
   * Получает вложенный файл по идентификатору.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFaqsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFaqsIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Faq>> {

    const rb = new RequestBuilder(this.rootUrl, FaqsService.ApiFaqsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Faq>;
      })
    );
  }

  /**
   * Получает вложенный файл по идентификатору.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiFaqsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFaqsIdGet$Json(params: {
    id: number;
  }): Observable<Faq> {

    return this.apiFaqsIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Faq>) => r.body as Faq)
    );
  }

  /**
   * Path part for operation apiFaqsIdPut
   */
  static readonly ApiFaqsIdPutPath = '/api/Faqs/{id}';

  /**
   * Обновляет вложенный файл.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFaqsIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFaqsIdPut$Response(params: {
    id: number;
    body?: Faq
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FaqsService.ApiFaqsIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiFaqsIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFaqsIdPut(params: {
    id: number;
    body?: Faq
  }): Observable<void> {

    return this.apiFaqsIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiFaqsIdDelete
   */
  static readonly ApiFaqsIdDeletePath = '/api/Faqs/{id}';

  /**
   * Удаляет вложенный файл.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFaqsIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFaqsIdDelete$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Faq>> {

    const rb = new RequestBuilder(this.rootUrl, FaqsService.ApiFaqsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Faq>;
      })
    );
  }

  /**
   * Удаляет вложенный файл.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiFaqsIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFaqsIdDelete$Plain(params: {
    id: number;
  }): Observable<Faq> {

    return this.apiFaqsIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Faq>) => r.body as Faq)
    );
  }

  /**
   * Удаляет вложенный файл.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFaqsIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFaqsIdDelete$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Faq>> {

    const rb = new RequestBuilder(this.rootUrl, FaqsService.ApiFaqsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Faq>;
      })
    );
  }

  /**
   * Удаляет вложенный файл.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiFaqsIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFaqsIdDelete$Json(params: {
    id: number;
  }): Observable<Faq> {

    return this.apiFaqsIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Faq>) => r.body as Faq)
    );
  }

}
