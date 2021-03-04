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

import { ResponsibilityCenter } from '../models/responsibility-center';

@Injectable({
  providedIn: 'root',
})
export class ResponsibilityCentersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiResponsibilityCentersGet
   */
  static readonly ApiResponsibilityCentersGetPath = '/api/ResponsibilityCenters';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiResponsibilityCentersGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiResponsibilityCentersGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ResponsibilityCenter>>> {

    const rb = new RequestBuilder(this.rootUrl, ResponsibilityCentersService.ApiResponsibilityCentersGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ResponsibilityCenter>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiResponsibilityCentersGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiResponsibilityCentersGet$Plain(params?: {
  }): Observable<Array<ResponsibilityCenter>> {

    return this.apiResponsibilityCentersGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ResponsibilityCenter>>) => r.body as Array<ResponsibilityCenter>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiResponsibilityCentersGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiResponsibilityCentersGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ResponsibilityCenter>>> {

    const rb = new RequestBuilder(this.rootUrl, ResponsibilityCentersService.ApiResponsibilityCentersGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ResponsibilityCenter>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiResponsibilityCentersGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiResponsibilityCentersGet$Json(params?: {
  }): Observable<Array<ResponsibilityCenter>> {

    return this.apiResponsibilityCentersGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ResponsibilityCenter>>) => r.body as Array<ResponsibilityCenter>)
    );
  }

  /**
   * Path part for operation apiResponsibilityCentersPost
   */
  static readonly ApiResponsibilityCentersPostPath = '/api/ResponsibilityCenters';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiResponsibilityCentersPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiResponsibilityCentersPost$Plain$Response(params?: {
    body?: ResponsibilityCenter
  }): Observable<StrictHttpResponse<ResponsibilityCenter>> {

    const rb = new RequestBuilder(this.rootUrl, ResponsibilityCentersService.ApiResponsibilityCentersPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponsibilityCenter>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiResponsibilityCentersPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiResponsibilityCentersPost$Plain(params?: {
    body?: ResponsibilityCenter
  }): Observable<ResponsibilityCenter> {

    return this.apiResponsibilityCentersPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ResponsibilityCenter>) => r.body as ResponsibilityCenter)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiResponsibilityCentersPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiResponsibilityCentersPost$Json$Response(params?: {
    body?: ResponsibilityCenter
  }): Observable<StrictHttpResponse<ResponsibilityCenter>> {

    const rb = new RequestBuilder(this.rootUrl, ResponsibilityCentersService.ApiResponsibilityCentersPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponsibilityCenter>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiResponsibilityCentersPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiResponsibilityCentersPost$Json(params?: {
    body?: ResponsibilityCenter
  }): Observable<ResponsibilityCenter> {

    return this.apiResponsibilityCentersPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ResponsibilityCenter>) => r.body as ResponsibilityCenter)
    );
  }

  /**
   * Path part for operation apiResponsibilityCentersIdGet
   */
  static readonly ApiResponsibilityCentersIdGetPath = '/api/ResponsibilityCenters/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiResponsibilityCentersIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiResponsibilityCentersIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<ResponsibilityCenter>> {

    const rb = new RequestBuilder(this.rootUrl, ResponsibilityCentersService.ApiResponsibilityCentersIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponsibilityCenter>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiResponsibilityCentersIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiResponsibilityCentersIdGet$Plain(params: {
    id: number;
  }): Observable<ResponsibilityCenter> {

    return this.apiResponsibilityCentersIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ResponsibilityCenter>) => r.body as ResponsibilityCenter)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiResponsibilityCentersIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiResponsibilityCentersIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<ResponsibilityCenter>> {

    const rb = new RequestBuilder(this.rootUrl, ResponsibilityCentersService.ApiResponsibilityCentersIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponsibilityCenter>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiResponsibilityCentersIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiResponsibilityCentersIdGet$Json(params: {
    id: number;
  }): Observable<ResponsibilityCenter> {

    return this.apiResponsibilityCentersIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ResponsibilityCenter>) => r.body as ResponsibilityCenter)
    );
  }

  /**
   * Path part for operation apiResponsibilityCentersIdPut
   */
  static readonly ApiResponsibilityCentersIdPutPath = '/api/ResponsibilityCenters/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiResponsibilityCentersIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiResponsibilityCentersIdPut$Response(params: {
    id: number;
    body?: ResponsibilityCenter
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ResponsibilityCentersService.ApiResponsibilityCentersIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiResponsibilityCentersIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiResponsibilityCentersIdPut(params: {
    id: number;
    body?: ResponsibilityCenter
  }): Observable<void> {

    return this.apiResponsibilityCentersIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiResponsibilityCentersIdDelete
   */
  static readonly ApiResponsibilityCentersIdDeletePath = '/api/ResponsibilityCenters/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiResponsibilityCentersIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiResponsibilityCentersIdDelete$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<ResponsibilityCenter>> {

    const rb = new RequestBuilder(this.rootUrl, ResponsibilityCentersService.ApiResponsibilityCentersIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponsibilityCenter>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiResponsibilityCentersIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiResponsibilityCentersIdDelete$Plain(params: {
    id: number;
  }): Observable<ResponsibilityCenter> {

    return this.apiResponsibilityCentersIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ResponsibilityCenter>) => r.body as ResponsibilityCenter)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiResponsibilityCentersIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiResponsibilityCentersIdDelete$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<ResponsibilityCenter>> {

    const rb = new RequestBuilder(this.rootUrl, ResponsibilityCentersService.ApiResponsibilityCentersIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponsibilityCenter>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiResponsibilityCentersIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiResponsibilityCentersIdDelete$Json(params: {
    id: number;
  }): Observable<ResponsibilityCenter> {

    return this.apiResponsibilityCentersIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ResponsibilityCenter>) => r.body as ResponsibilityCenter)
    );
  }

}
