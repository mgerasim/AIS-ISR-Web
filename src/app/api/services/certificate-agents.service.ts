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

import { CertificateAgent } from '../models/certificate-agent';

@Injectable({
  providedIn: 'root',
})
export class CertificateAgentsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCertificateAgentsGet
   */
  static readonly ApiCertificateAgentsGetPath = '/api/CertificateAgents';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCertificateAgentsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCertificateAgentsGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<CertificateAgent>>> {

    const rb = new RequestBuilder(this.rootUrl, CertificateAgentsService.ApiCertificateAgentsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CertificateAgent>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCertificateAgentsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCertificateAgentsGet$Plain(params?: {
  }): Observable<Array<CertificateAgent>> {

    return this.apiCertificateAgentsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CertificateAgent>>) => r.body as Array<CertificateAgent>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCertificateAgentsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCertificateAgentsGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<CertificateAgent>>> {

    const rb = new RequestBuilder(this.rootUrl, CertificateAgentsService.ApiCertificateAgentsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CertificateAgent>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCertificateAgentsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCertificateAgentsGet$Json(params?: {
  }): Observable<Array<CertificateAgent>> {

    return this.apiCertificateAgentsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CertificateAgent>>) => r.body as Array<CertificateAgent>)
    );
  }

  /**
   * Path part for operation apiCertificateAgentsPost
   */
  static readonly ApiCertificateAgentsPostPath = '/api/CertificateAgents';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCertificateAgentsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCertificateAgentsPost$Plain$Response(params?: {
    body?: CertificateAgent
  }): Observable<StrictHttpResponse<CertificateAgent>> {

    const rb = new RequestBuilder(this.rootUrl, CertificateAgentsService.ApiCertificateAgentsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CertificateAgent>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCertificateAgentsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCertificateAgentsPost$Plain(params?: {
    body?: CertificateAgent
  }): Observable<CertificateAgent> {

    return this.apiCertificateAgentsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CertificateAgent>) => r.body as CertificateAgent)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCertificateAgentsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCertificateAgentsPost$Json$Response(params?: {
    body?: CertificateAgent
  }): Observable<StrictHttpResponse<CertificateAgent>> {

    const rb = new RequestBuilder(this.rootUrl, CertificateAgentsService.ApiCertificateAgentsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CertificateAgent>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCertificateAgentsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCertificateAgentsPost$Json(params?: {
    body?: CertificateAgent
  }): Observable<CertificateAgent> {

    return this.apiCertificateAgentsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CertificateAgent>) => r.body as CertificateAgent)
    );
  }

  /**
   * Path part for operation apiCertificateAgentsIdGet
   */
  static readonly ApiCertificateAgentsIdGetPath = '/api/CertificateAgents/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCertificateAgentsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCertificateAgentsIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<CertificateAgent>> {

    const rb = new RequestBuilder(this.rootUrl, CertificateAgentsService.ApiCertificateAgentsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CertificateAgent>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCertificateAgentsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCertificateAgentsIdGet$Plain(params: {
    id: number;
  }): Observable<CertificateAgent> {

    return this.apiCertificateAgentsIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CertificateAgent>) => r.body as CertificateAgent)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCertificateAgentsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCertificateAgentsIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<CertificateAgent>> {

    const rb = new RequestBuilder(this.rootUrl, CertificateAgentsService.ApiCertificateAgentsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CertificateAgent>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCertificateAgentsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCertificateAgentsIdGet$Json(params: {
    id: number;
  }): Observable<CertificateAgent> {

    return this.apiCertificateAgentsIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CertificateAgent>) => r.body as CertificateAgent)
    );
  }

  /**
   * Path part for operation apiCertificateAgentsIdPut
   */
  static readonly ApiCertificateAgentsIdPutPath = '/api/CertificateAgents/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCertificateAgentsIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCertificateAgentsIdPut$Response(params: {
    id: number;
    body?: CertificateAgent
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CertificateAgentsService.ApiCertificateAgentsIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiCertificateAgentsIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCertificateAgentsIdPut(params: {
    id: number;
    body?: CertificateAgent
  }): Observable<void> {

    return this.apiCertificateAgentsIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiCertificateAgentsIdDelete
   */
  static readonly ApiCertificateAgentsIdDeletePath = '/api/CertificateAgents/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCertificateAgentsIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCertificateAgentsIdDelete$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<CertificateAgent>> {

    const rb = new RequestBuilder(this.rootUrl, CertificateAgentsService.ApiCertificateAgentsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CertificateAgent>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCertificateAgentsIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCertificateAgentsIdDelete$Plain(params: {
    id: number;
  }): Observable<CertificateAgent> {

    return this.apiCertificateAgentsIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CertificateAgent>) => r.body as CertificateAgent)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCertificateAgentsIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCertificateAgentsIdDelete$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<CertificateAgent>> {

    const rb = new RequestBuilder(this.rootUrl, CertificateAgentsService.ApiCertificateAgentsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CertificateAgent>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCertificateAgentsIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCertificateAgentsIdDelete$Json(params: {
    id: number;
  }): Observable<CertificateAgent> {

    return this.apiCertificateAgentsIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CertificateAgent>) => r.body as CertificateAgent)
    );
  }

}
