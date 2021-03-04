import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, forwardRef, NgModule, Provider} from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { NotificationModule } from '@progress/kendo-angular-notification';
import {CoreModule} from './core/core.module';
import { ListViewModule } from '@progress/kendo-angular-listview';
import { UploadModule } from '@progress/kendo-angular-upload';
import { GridModule } from '@progress/kendo-angular-grid';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EntityDataModule } from '@ngrx/data';
import {entityConfig} from './core/entity/entity-metadata';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import {ApiInterceptor} from './api-interceptor';
import {CoreService} from './core/core.service';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import {ApiModule} from './api/api.module';
import {environment} from '../environments/environment';



export const API_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: forwardRef(() => ApiInterceptor),
  multi: true
};

export function loadingProviderFactory(provider: CoreService): () => Promise<boolean> {
  return () => provider.load();
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ButtonsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    SharedModule,
    HttpClientModule,
    NotificationModule,
    CoreModule,
    ListViewModule,
    UploadModule,
    GridModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    DropDownsModule,
    DialogsModule,
    IndicatorsModule,
    ApiModule.forRoot({rootUrl: environment.rootUrl})
  ],
  providers: [
    ApiInterceptor,
    API_INTERCEPTOR_PROVIDER,
    { provide: APP_INITIALIZER, useFactory: loadingProviderFactory, deps: [CoreService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
