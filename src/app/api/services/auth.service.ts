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

import { AuthResponse } from '../models/auth-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAuthLoginGet
   */
  static readonly ApiAuthLoginGetPath = '/api/Auth/login';

  /**
   * Авторизация.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthLoginGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthLoginGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<AuthResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiAuthLoginGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuthResponse>;
      })
    );
  }

  /**
   * Авторизация.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuthLoginGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthLoginGet$Plain(params?: {
  }): Observable<AuthResponse> {

    return this.apiAuthLoginGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AuthResponse>) => r.body as AuthResponse)
    );
  }

  /**
   * Авторизация.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthLoginGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthLoginGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<AuthResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiAuthLoginGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuthResponse>;
      })
    );
  }

  /**
   * Авторизация.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuthLoginGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthLoginGet$Json(params?: {
  }): Observable<AuthResponse> {

    return this.apiAuthLoginGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<AuthResponse>) => r.body as AuthResponse)
    );
  }

}
