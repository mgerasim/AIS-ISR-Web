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

import { BatchEquipmentOperationEditRequest } from '../models/batch-equipment-operation-edit-request';

@Injectable({
  providedIn: 'root',
})
export class EquipmentsBatchService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiEquipmentsBatchMovePost
   */
  static readonly ApiEquipmentsBatchMovePostPath = '/api/EquipmentsBatch/Move';

  /**
   * Перемещает список оборудование в подразделение.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEquipmentsBatchMovePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEquipmentsBatchMovePost$Response(params?: {

    /**
     * Идентификатор подразделения, в которое перемещается список оборудования.
     */
    divisionId?: number;

    /**
     * Список идентификаторов оборудования для перемещение.
     */
    body?: Array<number>
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EquipmentsBatchService.ApiEquipmentsBatchMovePostPath, 'post');
    if (params) {
      rb.query('divisionId', params.divisionId, {});
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
   * Перемещает список оборудование в подразделение.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiEquipmentsBatchMovePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEquipmentsBatchMovePost(params?: {

    /**
     * Идентификатор подразделения, в которое перемещается список оборудования.
     */
    divisionId?: number;

    /**
     * Список идентификаторов оборудования для перемещение.
     */
    body?: Array<number>
  }): Observable<void> {

    return this.apiEquipmentsBatchMovePost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiEquipmentsBatchEditPost
   */
  static readonly ApiEquipmentsBatchEditPostPath = '/api/EquipmentsBatch/Edit';

  /**
   * Групповая операция редактирования оборудования.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEquipmentsBatchEditPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEquipmentsBatchEditPost$Response(params?: {

    /**
     * Параметры операции.
     */
    body?: BatchEquipmentOperationEditRequest
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EquipmentsBatchService.ApiEquipmentsBatchEditPostPath, 'post');
    if (params) {
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
   * Групповая операция редактирования оборудования.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiEquipmentsBatchEditPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEquipmentsBatchEditPost(params?: {

    /**
     * Параметры операции.
     */
    body?: BatchEquipmentOperationEditRequest
  }): Observable<void> {

    return this.apiEquipmentsBatchEditPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
