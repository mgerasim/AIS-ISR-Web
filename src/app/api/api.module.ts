/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AccountsService } from './services/accounts.service';
import { AttachmentsService } from './services/attachments.service';
import { AuthService } from './services/auth.service';
import { CertificateAgentsService } from './services/certificate-agents.service';
import { CertificatesService } from './services/certificates.service';
import { CertificateTypesService } from './services/certificate-types.service';
import { CharacteristicsService } from './services/characteristics.service';
import { CharacteristicUnitsService } from './services/characteristic-units.service';
import { CorrectiveActionsService } from './services/corrective-actions.service';
import { DivisionsService } from './services/divisions.service';
import { DivisionsBatchService } from './services/divisions-batch.service';
import { EquipmentsService } from './services/equipments.service';
import { EquipmentsBatchService } from './services/equipments-batch.service';
import { ExaminationsService } from './services/examinations.service';
import { FaqsService } from './services/faqs.service';
import { FilesService } from './services/files.service';
import { ImportService } from './services/import.service';
import { IncidentLogsService } from './services/incident-logs.service';
import { IncidentsService } from './services/incidents.service';
import { NotificationsService } from './services/notifications.service';
import { ResponsibilityCentersService } from './services/responsibility-centers.service';
import { SettingsService } from './services/settings.service';
import { UserNotificationsService } from './services/user-notifications.service';
import { UserResponsibilityCentersService } from './services/user-responsibility-centers.service';
import { UsersService } from './services/users.service';
import { WeatherForecastService } from './services/weather-forecast.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AccountsService,
    AttachmentsService,
    AuthService,
    CertificateAgentsService,
    CertificatesService,
    CertificateTypesService,
    CharacteristicsService,
    CharacteristicUnitsService,
    CorrectiveActionsService,
    DivisionsService,
    DivisionsBatchService,
    EquipmentsService,
    EquipmentsBatchService,
    ExaminationsService,
    FaqsService,
    FilesService,
    ImportService,
    IncidentLogsService,
    IncidentsService,
    NotificationsService,
    ResponsibilityCentersService,
    SettingsService,
    UserNotificationsService,
    UserResponsibilityCentersService,
    UsersService,
    WeatherForecastService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
