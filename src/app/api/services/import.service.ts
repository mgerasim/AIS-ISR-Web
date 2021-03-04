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

import { ImportResponse } from '../models/import-response';

@Injectable({
  providedIn: 'root',
})
export class ImportService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiImportGet
   */
  static readonly ApiImportGetPath = '/api/Import';

  /**
   * Статус текущего состояния импорта.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiImportGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiImportGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<ImportResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ImportService.ApiImportGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ImportResponse>;
      })
    );
  }

  /**
   * Статус текущего состояния импорта.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiImportGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiImportGet$Plain(params?: {
  }): Observable<ImportResponse> {

    return this.apiImportGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ImportResponse>) => r.body as ImportResponse)
    );
  }

  /**
   * Статус текущего состояния импорта.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiImportGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiImportGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<ImportResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ImportService.ApiImportGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ImportResponse>;
      })
    );
  }

  /**
   * Статус текущего состояния импорта.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiImportGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiImportGet$Json(params?: {
  }): Observable<ImportResponse> {

    return this.apiImportGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ImportResponse>) => r.body as ImportResponse)
    );
  }

  /**
   * Path part for operation apiImportPost
   */
  static readonly ApiImportPostPath = '/api/Import';

  /**
   * Импортирует Реестр ЭПБ.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiImportPost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiImportPost$Plain$Response(params?: {
    body?: { 'files'?: Array<Blob> }
  }): Observable<StrictHttpResponse<ImportResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ImportService.ApiImportPostPath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ImportResponse>;
      })
    );
  }

  /**
   * Импортирует Реестр ЭПБ.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiImportPost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiImportPost$Plain(params?: {
    body?: { 'files'?: Array<Blob> }
  }): Observable<ImportResponse> {

    return this.apiImportPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ImportResponse>) => r.body as ImportResponse)
    );
  }

  /**
   * Импортирует Реестр ЭПБ.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiImportPost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiImportPost$Json$Response(params?: {
    body?: { 'files'?: Array<Blob> }
  }): Observable<StrictHttpResponse<ImportResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ImportService.ApiImportPostPath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ImportResponse>;
      })
    );
  }

  /**
   * Импортирует Реестр ЭПБ.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiImportPost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiImportPost$Json(params?: {
    body?: { 'files'?: Array<Blob> }
  }): Observable<ImportResponse> {

    return this.apiImportPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ImportResponse>) => r.body as ImportResponse)
    );
  }

}
