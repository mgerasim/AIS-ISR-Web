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

import { Certificate } from '../models/certificate';

@Injectable({
  providedIn: 'root',
})
export class CertificatesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCertificatesGet
   */
  static readonly ApiCertificatesGetPath = '/api/Certificates';

  /**
   * Возвращает список сертификатов.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCertificatesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCertificatesGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Certificate>>> {

    const rb = new RequestBuilder(this.rootUrl, CertificatesService.ApiCertificatesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Certificate>>;
      })
    );
  }

  /**
   * Возвращает список сертификатов.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCertificatesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCertificatesGet$Plain(params?: {
  }): Observable<Array<Certificate>> {

    return this.apiCertificatesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Certificate>>) => r.body as Array<Certificate>)
    );
  }

  /**
   * Возвращает список сертификатов.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCertificatesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCertificatesGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Certificate>>> {

    const rb = new RequestBuilder(this.rootUrl, CertificatesService.ApiCertificatesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Certificate>>;
      })
    );
  }

  /**
   * Возвращает список сертификатов.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCertificatesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCertificatesGet$Json(params?: {
  }): Observable<Array<Certificate>> {

    return this.apiCertificatesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Certificate>>) => r.body as Array<Certificate>)
    );
  }

  /**
   * Path part for operation apiCertificatesPost
   */
  static readonly ApiCertificatesPostPath = '/api/Certificates';

  /**
   * Создает сертификат.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCertificatesPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCertificatesPost$Plain$Response(params?: {
    body?: Certificate
  }): Observable<StrictHttpResponse<Certificate>> {

    const rb = new RequestBuilder(this.rootUrl, CertificatesService.ApiCertificatesPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Certificate>;
      })
    );
  }

  /**
   * Создает сертификат.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCertificatesPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCertificatesPost$Plain(params?: {
    body?: Certificate
  }): Observable<Certificate> {

    return this.apiCertificatesPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Certificate>) => r.body as Certificate)
    );
  }

  /**
   * Создает сертификат.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCertificatesPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCertificatesPost$Json$Response(params?: {
    body?: Certificate
  }): Observable<StrictHttpResponse<Certificate>> {

    const rb = new RequestBuilder(this.rootUrl, CertificatesService.ApiCertificatesPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Certificate>;
      })
    );
  }

  /**
   * Создает сертификат.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCertificatesPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCertificatesPost$Json(params?: {
    body?: Certificate
  }): Observable<Certificate> {

    return this.apiCertificatesPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Certificate>) => r.body as Certificate)
    );
  }

  /**
   * Path part for operation apiCertificatesIdGet
   */
  static readonly ApiCertificatesIdGetPath = '/api/Certificates/{id}';

  /**
   * Получает сертификат по идентификатору.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCertificatesIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCertificatesIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Certificate>> {

    const rb = new RequestBuilder(this.rootUrl, CertificatesService.ApiCertificatesIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Certificate>;
      })
    );
  }

  /**
   * Получает сертификат по идентификатору.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCertificatesIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCertificatesIdGet$Plain(params: {
    id: number;
  }): Observable<Certificate> {

    return this.apiCertificatesIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Certificate>) => r.body as Certificate)
    );
  }

  /**
   * Получает сертификат по идентификатору.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCertificatesIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCertificatesIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Certificate>> {

    const rb = new RequestBuilder(this.rootUrl, CertificatesService.ApiCertificatesIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Certificate>;
      })
    );
  }

  /**
   * Получает сертификат по идентификатору.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCertificatesIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCertificatesIdGet$Json(params: {
    id: number;
  }): Observable<Certificate> {

    return this.apiCertificatesIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Certificate>) => r.body as Certificate)
    );
  }

  /**
   * Path part for operation apiCertificatesIdPut
   */
  static readonly ApiCertificatesIdPutPath = '/api/Certificates/{id}';

  /**
   * Обновляет сертификат.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCertificatesIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCertificatesIdPut$Response(params: {
    id: number;
    body?: Certificate
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CertificatesService.ApiCertificatesIdPutPath, 'put');
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
   * Обновляет сертификат.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCertificatesIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCertificatesIdPut(params: {
    id: number;
    body?: Certificate
  }): Observable<void> {

    return this.apiCertificatesIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiCertificatesIdDelete
   */
  static readonly ApiCertificatesIdDeletePath = '/api/Certificates/{id}';

  /**
   * Удоляет сертификат.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCertificatesIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCertificatesIdDelete$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Certificate>> {

    const rb = new RequestBuilder(this.rootUrl, CertificatesService.ApiCertificatesIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Certificate>;
      })
    );
  }

  /**
   * Удоляет сертификат.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCertificatesIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCertificatesIdDelete$Plain(params: {
    id: number;
  }): Observable<Certificate> {

    return this.apiCertificatesIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Certificate>) => r.body as Certificate)
    );
  }

  /**
   * Удоляет сертификат.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCertificatesIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCertificatesIdDelete$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Certificate>> {

    const rb = new RequestBuilder(this.rootUrl, CertificatesService.ApiCertificatesIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Certificate>;
      })
    );
  }

  /**
   * Удоляет сертификат.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCertificatesIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCertificatesIdDelete$Json(params: {
    id: number;
  }): Observable<Certificate> {

    return this.apiCertificatesIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Certificate>) => r.body as Certificate)
    );
  }

}
