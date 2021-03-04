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

import { CertificateType } from '../models/certificate-type';

@Injectable({
  providedIn: 'root',
})
export class CertificateTypesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCertificateTypesGet
   */
  static readonly ApiCertificateTypesGetPath = '/api/CertificateTypes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCertificateTypesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCertificateTypesGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<CertificateType>>> {

    const rb = new RequestBuilder(this.rootUrl, CertificateTypesService.ApiCertificateTypesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CertificateType>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCertificateTypesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCertificateTypesGet$Plain(params?: {
  }): Observable<Array<CertificateType>> {

    return this.apiCertificateTypesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CertificateType>>) => r.body as Array<CertificateType>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCertificateTypesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCertificateTypesGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<CertificateType>>> {

    const rb = new RequestBuilder(this.rootUrl, CertificateTypesService.ApiCertificateTypesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CertificateType>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCertificateTypesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCertificateTypesGet$Json(params?: {
  }): Observable<Array<CertificateType>> {

    return this.apiCertificateTypesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CertificateType>>) => r.body as Array<CertificateType>)
    );
  }

  /**
   * Path part for operation apiCertificateTypesPost
   */
  static readonly ApiCertificateTypesPostPath = '/api/CertificateTypes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCertificateTypesPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCertificateTypesPost$Plain$Response(params?: {
    body?: CertificateType
  }): Observable<StrictHttpResponse<CertificateType>> {

    const rb = new RequestBuilder(this.rootUrl, CertificateTypesService.ApiCertificateTypesPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CertificateType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCertificateTypesPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCertificateTypesPost$Plain(params?: {
    body?: CertificateType
  }): Observable<CertificateType> {

    return this.apiCertificateTypesPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CertificateType>) => r.body as CertificateType)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCertificateTypesPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCertificateTypesPost$Json$Response(params?: {
    body?: CertificateType
  }): Observable<StrictHttpResponse<CertificateType>> {

    const rb = new RequestBuilder(this.rootUrl, CertificateTypesService.ApiCertificateTypesPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CertificateType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCertificateTypesPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCertificateTypesPost$Json(params?: {
    body?: CertificateType
  }): Observable<CertificateType> {

    return this.apiCertificateTypesPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CertificateType>) => r.body as CertificateType)
    );
  }

  /**
   * Path part for operation apiCertificateTypesIdGet
   */
  static readonly ApiCertificateTypesIdGetPath = '/api/CertificateTypes/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCertificateTypesIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCertificateTypesIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<CertificateType>> {

    const rb = new RequestBuilder(this.rootUrl, CertificateTypesService.ApiCertificateTypesIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CertificateType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCertificateTypesIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCertificateTypesIdGet$Plain(params: {
    id: number;
  }): Observable<CertificateType> {

    return this.apiCertificateTypesIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CertificateType>) => r.body as CertificateType)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCertificateTypesIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCertificateTypesIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<CertificateType>> {

    const rb = new RequestBuilder(this.rootUrl, CertificateTypesService.ApiCertificateTypesIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CertificateType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCertificateTypesIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCertificateTypesIdGet$Json(params: {
    id: number;
  }): Observable<CertificateType> {

    return this.apiCertificateTypesIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CertificateType>) => r.body as CertificateType)
    );
  }

  /**
   * Path part for operation apiCertificateTypesIdPut
   */
  static readonly ApiCertificateTypesIdPutPath = '/api/CertificateTypes/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCertificateTypesIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCertificateTypesIdPut$Response(params: {
    id: number;
    body?: CertificateType
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CertificateTypesService.ApiCertificateTypesIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiCertificateTypesIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCertificateTypesIdPut(params: {
    id: number;
    body?: CertificateType
  }): Observable<void> {

    return this.apiCertificateTypesIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiCertificateTypesIdDelete
   */
  static readonly ApiCertificateTypesIdDeletePath = '/api/CertificateTypes/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCertificateTypesIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCertificateTypesIdDelete$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<CertificateType>> {

    const rb = new RequestBuilder(this.rootUrl, CertificateTypesService.ApiCertificateTypesIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CertificateType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCertificateTypesIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCertificateTypesIdDelete$Plain(params: {
    id: number;
  }): Observable<CertificateType> {

    return this.apiCertificateTypesIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CertificateType>) => r.body as CertificateType)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCertificateTypesIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCertificateTypesIdDelete$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<CertificateType>> {

    const rb = new RequestBuilder(this.rootUrl, CertificateTypesService.ApiCertificateTypesIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CertificateType>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCertificateTypesIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCertificateTypesIdDelete$Json(params: {
    id: number;
  }): Observable<CertificateType> {

    return this.apiCertificateTypesIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CertificateType>) => r.body as CertificateType)
    );
  }

}
