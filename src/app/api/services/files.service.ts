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


@Injectable({
  providedIn: 'root',
})
export class FilesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiFilesUploadPost
   */
  static readonly ApiFilesUploadPostPath = '/api/Files/Upload';

  /**
   * Загружает файл на сервер.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFilesUploadPost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiFilesUploadPost$Plain$Response(params?: {
    body?: { 'files'?: Array<Blob> }
  }): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, FilesService.ApiFilesUploadPostPath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * Загружает файл на сервер.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiFilesUploadPost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiFilesUploadPost$Plain(params?: {
    body?: { 'files'?: Array<Blob> }
  }): Observable<number> {

    return this.apiFilesUploadPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Загружает файл на сервер.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFilesUploadPost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiFilesUploadPost$Json$Response(params?: {
    body?: { 'files'?: Array<Blob> }
  }): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, FilesService.ApiFilesUploadPostPath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * Загружает файл на сервер.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiFilesUploadPost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiFilesUploadPost$Json(params?: {
    body?: { 'files'?: Array<Blob> }
  }): Observable<number> {

    return this.apiFilesUploadPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation apiFilesIdGet
   */
  static readonly ApiFilesIdGetPath = '/api/Files/{id}';

  /**
   * Скачивает файл.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFilesIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFilesIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, FilesService.ApiFilesIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Blob>;
      })
    );
  }

  /**
   * Скачивает файл.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiFilesIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFilesIdGet$Plain(params: {
    id: number;
  }): Observable<Blob> {

    return this.apiFilesIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Скачивает файл.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFilesIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFilesIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, FilesService.ApiFilesIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Blob>;
      })
    );
  }

  /**
   * Скачивает файл.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiFilesIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFilesIdGet$Json(params: {
    id: number;
  }): Observable<Blob> {

    return this.apiFilesIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

}
