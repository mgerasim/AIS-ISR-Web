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

import { CharacteristicUnit } from '../models/characteristic-unit';

@Injectable({
  providedIn: 'root',
})
export class CharacteristicUnitsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCharacteristicUnitsGet
   */
  static readonly ApiCharacteristicUnitsGetPath = '/api/CharacteristicUnits';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCharacteristicUnitsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCharacteristicUnitsGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<CharacteristicUnit>>> {

    const rb = new RequestBuilder(this.rootUrl, CharacteristicUnitsService.ApiCharacteristicUnitsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CharacteristicUnit>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCharacteristicUnitsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCharacteristicUnitsGet$Plain(params?: {
  }): Observable<Array<CharacteristicUnit>> {

    return this.apiCharacteristicUnitsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CharacteristicUnit>>) => r.body as Array<CharacteristicUnit>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCharacteristicUnitsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCharacteristicUnitsGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<CharacteristicUnit>>> {

    const rb = new RequestBuilder(this.rootUrl, CharacteristicUnitsService.ApiCharacteristicUnitsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CharacteristicUnit>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCharacteristicUnitsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCharacteristicUnitsGet$Json(params?: {
  }): Observable<Array<CharacteristicUnit>> {

    return this.apiCharacteristicUnitsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CharacteristicUnit>>) => r.body as Array<CharacteristicUnit>)
    );
  }

  /**
   * Path part for operation apiCharacteristicUnitsPost
   */
  static readonly ApiCharacteristicUnitsPostPath = '/api/CharacteristicUnits';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCharacteristicUnitsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCharacteristicUnitsPost$Plain$Response(params?: {
    body?: CharacteristicUnit
  }): Observable<StrictHttpResponse<CharacteristicUnit>> {

    const rb = new RequestBuilder(this.rootUrl, CharacteristicUnitsService.ApiCharacteristicUnitsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CharacteristicUnit>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCharacteristicUnitsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCharacteristicUnitsPost$Plain(params?: {
    body?: CharacteristicUnit
  }): Observable<CharacteristicUnit> {

    return this.apiCharacteristicUnitsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CharacteristicUnit>) => r.body as CharacteristicUnit)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCharacteristicUnitsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCharacteristicUnitsPost$Json$Response(params?: {
    body?: CharacteristicUnit
  }): Observable<StrictHttpResponse<CharacteristicUnit>> {

    const rb = new RequestBuilder(this.rootUrl, CharacteristicUnitsService.ApiCharacteristicUnitsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CharacteristicUnit>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCharacteristicUnitsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCharacteristicUnitsPost$Json(params?: {
    body?: CharacteristicUnit
  }): Observable<CharacteristicUnit> {

    return this.apiCharacteristicUnitsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CharacteristicUnit>) => r.body as CharacteristicUnit)
    );
  }

  /**
   * Path part for operation apiCharacteristicUnitsIdGet
   */
  static readonly ApiCharacteristicUnitsIdGetPath = '/api/CharacteristicUnits/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCharacteristicUnitsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCharacteristicUnitsIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<CharacteristicUnit>> {

    const rb = new RequestBuilder(this.rootUrl, CharacteristicUnitsService.ApiCharacteristicUnitsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CharacteristicUnit>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCharacteristicUnitsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCharacteristicUnitsIdGet$Plain(params: {
    id: number;
  }): Observable<CharacteristicUnit> {

    return this.apiCharacteristicUnitsIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CharacteristicUnit>) => r.body as CharacteristicUnit)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCharacteristicUnitsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCharacteristicUnitsIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<CharacteristicUnit>> {

    const rb = new RequestBuilder(this.rootUrl, CharacteristicUnitsService.ApiCharacteristicUnitsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CharacteristicUnit>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCharacteristicUnitsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCharacteristicUnitsIdGet$Json(params: {
    id: number;
  }): Observable<CharacteristicUnit> {

    return this.apiCharacteristicUnitsIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CharacteristicUnit>) => r.body as CharacteristicUnit)
    );
  }

  /**
   * Path part for operation apiCharacteristicUnitsIdPut
   */
  static readonly ApiCharacteristicUnitsIdPutPath = '/api/CharacteristicUnits/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCharacteristicUnitsIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCharacteristicUnitsIdPut$Response(params: {
    id: number;
    body?: CharacteristicUnit
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CharacteristicUnitsService.ApiCharacteristicUnitsIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiCharacteristicUnitsIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCharacteristicUnitsIdPut(params: {
    id: number;
    body?: CharacteristicUnit
  }): Observable<void> {

    return this.apiCharacteristicUnitsIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiCharacteristicUnitsIdDelete
   */
  static readonly ApiCharacteristicUnitsIdDeletePath = '/api/CharacteristicUnits/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCharacteristicUnitsIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCharacteristicUnitsIdDelete$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<CharacteristicUnit>> {

    const rb = new RequestBuilder(this.rootUrl, CharacteristicUnitsService.ApiCharacteristicUnitsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CharacteristicUnit>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCharacteristicUnitsIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCharacteristicUnitsIdDelete$Plain(params: {
    id: number;
  }): Observable<CharacteristicUnit> {

    return this.apiCharacteristicUnitsIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CharacteristicUnit>) => r.body as CharacteristicUnit)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCharacteristicUnitsIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCharacteristicUnitsIdDelete$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<CharacteristicUnit>> {

    const rb = new RequestBuilder(this.rootUrl, CharacteristicUnitsService.ApiCharacteristicUnitsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CharacteristicUnit>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCharacteristicUnitsIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCharacteristicUnitsIdDelete$Json(params: {
    id: number;
  }): Observable<CharacteristicUnit> {

    return this.apiCharacteristicUnitsIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CharacteristicUnit>) => r.body as CharacteristicUnit)
    );
  }

}
