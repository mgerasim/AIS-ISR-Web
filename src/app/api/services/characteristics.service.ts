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

import { Characteristic } from '../models/characteristic';

@Injectable({
  providedIn: 'root',
})
export class CharacteristicsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCharacteristicsGet
   */
  static readonly ApiCharacteristicsGetPath = '/api/Characteristics';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCharacteristicsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCharacteristicsGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Characteristic>>> {

    const rb = new RequestBuilder(this.rootUrl, CharacteristicsService.ApiCharacteristicsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Characteristic>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCharacteristicsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCharacteristicsGet$Plain(params?: {
  }): Observable<Array<Characteristic>> {

    return this.apiCharacteristicsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Characteristic>>) => r.body as Array<Characteristic>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCharacteristicsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCharacteristicsGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Characteristic>>> {

    const rb = new RequestBuilder(this.rootUrl, CharacteristicsService.ApiCharacteristicsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Characteristic>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCharacteristicsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCharacteristicsGet$Json(params?: {
  }): Observable<Array<Characteristic>> {

    return this.apiCharacteristicsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Characteristic>>) => r.body as Array<Characteristic>)
    );
  }

  /**
   * Path part for operation apiCharacteristicsPost
   */
  static readonly ApiCharacteristicsPostPath = '/api/Characteristics';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCharacteristicsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCharacteristicsPost$Plain$Response(params?: {
    body?: Characteristic
  }): Observable<StrictHttpResponse<Characteristic>> {

    const rb = new RequestBuilder(this.rootUrl, CharacteristicsService.ApiCharacteristicsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Characteristic>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCharacteristicsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCharacteristicsPost$Plain(params?: {
    body?: Characteristic
  }): Observable<Characteristic> {

    return this.apiCharacteristicsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Characteristic>) => r.body as Characteristic)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCharacteristicsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCharacteristicsPost$Json$Response(params?: {
    body?: Characteristic
  }): Observable<StrictHttpResponse<Characteristic>> {

    const rb = new RequestBuilder(this.rootUrl, CharacteristicsService.ApiCharacteristicsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Characteristic>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCharacteristicsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCharacteristicsPost$Json(params?: {
    body?: Characteristic
  }): Observable<Characteristic> {

    return this.apiCharacteristicsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Characteristic>) => r.body as Characteristic)
    );
  }

  /**
   * Path part for operation apiCharacteristicsIdGet
   */
  static readonly ApiCharacteristicsIdGetPath = '/api/Characteristics/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCharacteristicsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCharacteristicsIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Characteristic>> {

    const rb = new RequestBuilder(this.rootUrl, CharacteristicsService.ApiCharacteristicsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Characteristic>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCharacteristicsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCharacteristicsIdGet$Plain(params: {
    id: number;
  }): Observable<Characteristic> {

    return this.apiCharacteristicsIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Characteristic>) => r.body as Characteristic)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCharacteristicsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCharacteristicsIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Characteristic>> {

    const rb = new RequestBuilder(this.rootUrl, CharacteristicsService.ApiCharacteristicsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Characteristic>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCharacteristicsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCharacteristicsIdGet$Json(params: {
    id: number;
  }): Observable<Characteristic> {

    return this.apiCharacteristicsIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Characteristic>) => r.body as Characteristic)
    );
  }

  /**
   * Path part for operation apiCharacteristicsIdPut
   */
  static readonly ApiCharacteristicsIdPutPath = '/api/Characteristics/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCharacteristicsIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCharacteristicsIdPut$Response(params: {
    id: number;
    body?: Characteristic
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CharacteristicsService.ApiCharacteristicsIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiCharacteristicsIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCharacteristicsIdPut(params: {
    id: number;
    body?: Characteristic
  }): Observable<void> {

    return this.apiCharacteristicsIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiCharacteristicsIdDelete
   */
  static readonly ApiCharacteristicsIdDeletePath = '/api/Characteristics/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCharacteristicsIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCharacteristicsIdDelete$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Characteristic>> {

    const rb = new RequestBuilder(this.rootUrl, CharacteristicsService.ApiCharacteristicsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Characteristic>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCharacteristicsIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCharacteristicsIdDelete$Plain(params: {
    id: number;
  }): Observable<Characteristic> {

    return this.apiCharacteristicsIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Characteristic>) => r.body as Characteristic)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCharacteristicsIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCharacteristicsIdDelete$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Characteristic>> {

    const rb = new RequestBuilder(this.rootUrl, CharacteristicsService.ApiCharacteristicsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Characteristic>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCharacteristicsIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCharacteristicsIdDelete$Json(params: {
    id: number;
  }): Observable<Characteristic> {

    return this.apiCharacteristicsIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Characteristic>) => r.body as Characteristic)
    );
  }

}
