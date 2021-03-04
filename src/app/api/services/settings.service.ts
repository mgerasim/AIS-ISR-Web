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

import { Settings } from '../models/settings';

@Injectable({
  providedIn: 'root',
})
export class SettingsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiSettingsGet
   */
  static readonly ApiSettingsGetPath = '/api/Settings';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSettingsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSettingsGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Settings>> {

    const rb = new RequestBuilder(this.rootUrl, SettingsService.ApiSettingsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Settings>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSettingsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSettingsGet$Plain(params?: {
  }): Observable<Settings> {

    return this.apiSettingsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Settings>) => r.body as Settings)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSettingsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSettingsGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Settings>> {

    const rb = new RequestBuilder(this.rootUrl, SettingsService.ApiSettingsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Settings>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSettingsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSettingsGet$Json(params?: {
  }): Observable<Settings> {

    return this.apiSettingsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Settings>) => r.body as Settings)
    );
  }

  /**
   * Path part for operation apiSettingsPut
   */
  static readonly ApiSettingsPutPath = '/api/Settings';

  /**
   * Сохраняет настройки.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSettingsPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSettingsPut$Response(params?: {
    body?: Settings
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SettingsService.ApiSettingsPutPath, 'put');
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
   * Сохраняет настройки.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSettingsPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSettingsPut(params?: {
    body?: Settings
  }): Observable<void> {

    return this.apiSettingsPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
