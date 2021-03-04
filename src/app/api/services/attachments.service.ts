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

import { Attachment } from '../models/attachment';

@Injectable({
  providedIn: 'root',
})
export class AttachmentsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAttachmentsGet
   */
  static readonly ApiAttachmentsGetPath = '/api/Attachments';

  /**
   * Получает список вложенных файлов.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAttachmentsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAttachmentsGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Attachment>>> {

    const rb = new RequestBuilder(this.rootUrl, AttachmentsService.ApiAttachmentsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Attachment>>;
      })
    );
  }

  /**
   * Получает список вложенных файлов.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAttachmentsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAttachmentsGet$Plain(params?: {
  }): Observable<Array<Attachment>> {

    return this.apiAttachmentsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Attachment>>) => r.body as Array<Attachment>)
    );
  }

  /**
   * Получает список вложенных файлов.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAttachmentsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAttachmentsGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Attachment>>> {

    const rb = new RequestBuilder(this.rootUrl, AttachmentsService.ApiAttachmentsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Attachment>>;
      })
    );
  }

  /**
   * Получает список вложенных файлов.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAttachmentsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAttachmentsGet$Json(params?: {
  }): Observable<Array<Attachment>> {

    return this.apiAttachmentsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Attachment>>) => r.body as Array<Attachment>)
    );
  }

  /**
   * Path part for operation apiAttachmentsPost
   */
  static readonly ApiAttachmentsPostPath = '/api/Attachments';

  /**
   * Создает вложенный файл.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAttachmentsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAttachmentsPost$Plain$Response(params?: {
    body?: Attachment
  }): Observable<StrictHttpResponse<Attachment>> {

    const rb = new RequestBuilder(this.rootUrl, AttachmentsService.ApiAttachmentsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Attachment>;
      })
    );
  }

  /**
   * Создает вложенный файл.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAttachmentsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAttachmentsPost$Plain(params?: {
    body?: Attachment
  }): Observable<Attachment> {

    return this.apiAttachmentsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Attachment>) => r.body as Attachment)
    );
  }

  /**
   * Создает вложенный файл.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAttachmentsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAttachmentsPost$Json$Response(params?: {
    body?: Attachment
  }): Observable<StrictHttpResponse<Attachment>> {

    const rb = new RequestBuilder(this.rootUrl, AttachmentsService.ApiAttachmentsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Attachment>;
      })
    );
  }

  /**
   * Создает вложенный файл.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAttachmentsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAttachmentsPost$Json(params?: {
    body?: Attachment
  }): Observable<Attachment> {

    return this.apiAttachmentsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Attachment>) => r.body as Attachment)
    );
  }

  /**
   * Path part for operation apiAttachmentsIdGet
   */
  static readonly ApiAttachmentsIdGetPath = '/api/Attachments/{id}';

  /**
   * Получает вложенный файл по идентификатору.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAttachmentsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAttachmentsIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Attachment>> {

    const rb = new RequestBuilder(this.rootUrl, AttachmentsService.ApiAttachmentsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Attachment>;
      })
    );
  }

  /**
   * Получает вложенный файл по идентификатору.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAttachmentsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAttachmentsIdGet$Plain(params: {
    id: number;
  }): Observable<Attachment> {

    return this.apiAttachmentsIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Attachment>) => r.body as Attachment)
    );
  }

  /**
   * Получает вложенный файл по идентификатору.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAttachmentsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAttachmentsIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Attachment>> {

    const rb = new RequestBuilder(this.rootUrl, AttachmentsService.ApiAttachmentsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Attachment>;
      })
    );
  }

  /**
   * Получает вложенный файл по идентификатору.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAttachmentsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAttachmentsIdGet$Json(params: {
    id: number;
  }): Observable<Attachment> {

    return this.apiAttachmentsIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Attachment>) => r.body as Attachment)
    );
  }

  /**
   * Path part for operation apiAttachmentsIdPut
   */
  static readonly ApiAttachmentsIdPutPath = '/api/Attachments/{id}';

  /**
   * Обновляет вложенный файл.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAttachmentsIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAttachmentsIdPut$Response(params: {
    id: number;
    body?: Attachment
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AttachmentsService.ApiAttachmentsIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiAttachmentsIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAttachmentsIdPut(params: {
    id: number;
    body?: Attachment
  }): Observable<void> {

    return this.apiAttachmentsIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAttachmentsIdDelete
   */
  static readonly ApiAttachmentsIdDeletePath = '/api/Attachments/{id}';

  /**
   * Удаляет вложенный файл.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAttachmentsIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAttachmentsIdDelete$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Attachment>> {

    const rb = new RequestBuilder(this.rootUrl, AttachmentsService.ApiAttachmentsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Attachment>;
      })
    );
  }

  /**
   * Удаляет вложенный файл.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAttachmentsIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAttachmentsIdDelete$Plain(params: {
    id: number;
  }): Observable<Attachment> {

    return this.apiAttachmentsIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Attachment>) => r.body as Attachment)
    );
  }

  /**
   * Удаляет вложенный файл.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAttachmentsIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAttachmentsIdDelete$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Attachment>> {

    const rb = new RequestBuilder(this.rootUrl, AttachmentsService.ApiAttachmentsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Attachment>;
      })
    );
  }

  /**
   * Удаляет вложенный файл.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAttachmentsIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAttachmentsIdDelete$Json(params: {
    id: number;
  }): Observable<Attachment> {

    return this.apiAttachmentsIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Attachment>) => r.body as Attachment)
    );
  }

}
