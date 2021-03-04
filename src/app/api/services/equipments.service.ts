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

import { Equipment } from '../models/equipment';

@Injectable({
  providedIn: 'root',
})
export class EquipmentsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiEquipmentsGet
   */
  static readonly ApiEquipmentsGetPath = '/api/Equipments';

  /**
   * Возвращает список оборудования.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEquipmentsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEquipmentsGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Equipment>>> {

    const rb = new RequestBuilder(this.rootUrl, EquipmentsService.ApiEquipmentsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Equipment>>;
      })
    );
  }

  /**
   * Возвращает список оборудования.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiEquipmentsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEquipmentsGet$Plain(params?: {
  }): Observable<Array<Equipment>> {

    return this.apiEquipmentsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Equipment>>) => r.body as Array<Equipment>)
    );
  }

  /**
   * Возвращает список оборудования.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEquipmentsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEquipmentsGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Equipment>>> {

    const rb = new RequestBuilder(this.rootUrl, EquipmentsService.ApiEquipmentsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Equipment>>;
      })
    );
  }

  /**
   * Возвращает список оборудования.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiEquipmentsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEquipmentsGet$Json(params?: {
  }): Observable<Array<Equipment>> {

    return this.apiEquipmentsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Equipment>>) => r.body as Array<Equipment>)
    );
  }

  /**
   * Path part for operation apiEquipmentsPost
   */
  static readonly ApiEquipmentsPostPath = '/api/Equipments';

  /**
   * Создает оборудование.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEquipmentsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEquipmentsPost$Plain$Response(params?: {
    body?: Equipment
  }): Observable<StrictHttpResponse<Equipment>> {

    const rb = new RequestBuilder(this.rootUrl, EquipmentsService.ApiEquipmentsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Equipment>;
      })
    );
  }

  /**
   * Создает оборудование.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiEquipmentsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEquipmentsPost$Plain(params?: {
    body?: Equipment
  }): Observable<Equipment> {

    return this.apiEquipmentsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Equipment>) => r.body as Equipment)
    );
  }

  /**
   * Создает оборудование.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEquipmentsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEquipmentsPost$Json$Response(params?: {
    body?: Equipment
  }): Observable<StrictHttpResponse<Equipment>> {

    const rb = new RequestBuilder(this.rootUrl, EquipmentsService.ApiEquipmentsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Equipment>;
      })
    );
  }

  /**
   * Создает оборудование.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiEquipmentsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEquipmentsPost$Json(params?: {
    body?: Equipment
  }): Observable<Equipment> {

    return this.apiEquipmentsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Equipment>) => r.body as Equipment)
    );
  }

  /**
   * Path part for operation apiEquipmentsIdGet
   */
  static readonly ApiEquipmentsIdGetPath = '/api/Equipments/{id}';

  /**
   * Возвращает оборудование по идентификатору.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEquipmentsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEquipmentsIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Equipment>> {

    const rb = new RequestBuilder(this.rootUrl, EquipmentsService.ApiEquipmentsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Equipment>;
      })
    );
  }

  /**
   * Возвращает оборудование по идентификатору.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiEquipmentsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEquipmentsIdGet$Plain(params: {
    id: number;
  }): Observable<Equipment> {

    return this.apiEquipmentsIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Equipment>) => r.body as Equipment)
    );
  }

  /**
   * Возвращает оборудование по идентификатору.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEquipmentsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEquipmentsIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Equipment>> {

    const rb = new RequestBuilder(this.rootUrl, EquipmentsService.ApiEquipmentsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Equipment>;
      })
    );
  }

  /**
   * Возвращает оборудование по идентификатору.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiEquipmentsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEquipmentsIdGet$Json(params: {
    id: number;
  }): Observable<Equipment> {

    return this.apiEquipmentsIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Equipment>) => r.body as Equipment)
    );
  }

  /**
   * Path part for operation apiEquipmentsIdPut
   */
  static readonly ApiEquipmentsIdPutPath = '/api/Equipments/{id}';

  /**
   * Обнолвяет оборудование.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEquipmentsIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEquipmentsIdPut$Response(params: {
    id: number;
    body?: Equipment
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EquipmentsService.ApiEquipmentsIdPutPath, 'put');
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
   * Обнолвяет оборудование.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiEquipmentsIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEquipmentsIdPut(params: {
    id: number;
    body?: Equipment
  }): Observable<void> {

    return this.apiEquipmentsIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiEquipmentsIdDelete
   */
  static readonly ApiEquipmentsIdDeletePath = '/api/Equipments/{id}';

  /**
   * Удаляет оборудование.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEquipmentsIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEquipmentsIdDelete$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Equipment>> {

    const rb = new RequestBuilder(this.rootUrl, EquipmentsService.ApiEquipmentsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Equipment>;
      })
    );
  }

  /**
   * Удаляет оборудование.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiEquipmentsIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEquipmentsIdDelete$Plain(params: {
    id: number;
  }): Observable<Equipment> {

    return this.apiEquipmentsIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Equipment>) => r.body as Equipment)
    );
  }

  /**
   * Удаляет оборудование.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEquipmentsIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEquipmentsIdDelete$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<Equipment>> {

    const rb = new RequestBuilder(this.rootUrl, EquipmentsService.ApiEquipmentsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Equipment>;
      })
    );
  }

  /**
   * Удаляет оборудование.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiEquipmentsIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEquipmentsIdDelete$Json(params: {
    id: number;
  }): Observable<Equipment> {

    return this.apiEquipmentsIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Equipment>) => r.body as Equipment)
    );
  }

}
