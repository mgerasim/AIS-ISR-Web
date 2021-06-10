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
   * Path part for operation apiAuthTokenGet
   */
  static readonly ApiAuthTokenGetPath = '/api/Auth/token';

  /**
   * Получение токена авторизации.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthTokenGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthTokenGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiAuthTokenGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * Получение токена авторизации.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuthTokenGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthTokenGet$Plain(params?: {
  }): Observable<string> {

    return this.apiAuthTokenGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Получение токена авторизации.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthTokenGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthTokenGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiAuthTokenGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * Получение токена авторизации.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuthTokenGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthTokenGet$Json(params?: {
  }): Observable<string> {

    return this.apiAuthTokenGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
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

  /**
   * Path part for operation apiAuthSignInGet
   */
  static readonly ApiAuthSignInGetPath = '/api/Auth/SignIn';

  /**
   * Авторизация.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthSignInGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthSignInGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<AuthResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiAuthSignInGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiAuthSignInGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthSignInGet$Plain(params?: {
  }): Observable<AuthResponse> {

    return this.apiAuthSignInGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AuthResponse>) => r.body as AuthResponse)
    );
  }

  /**
   * Авторизация.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthSignInGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthSignInGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<AuthResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiAuthSignInGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiAuthSignInGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthSignInGet$Json(params?: {
  }): Observable<AuthResponse> {

    return this.apiAuthSignInGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<AuthResponse>) => r.body as AuthResponse)
    );
  }

}
