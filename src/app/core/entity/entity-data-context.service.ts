import {Injectable} from '@angular/core';
import {
  EntityCollectionServiceElementsFactory,
  EntityDataService,
  EntityServicesBase,
  EntityServicesElements,
} from '@ngrx/data';
import {CustomEntityDataServiceOptions} from './custom-entity-data-service-options';
import {CustomEntityDataService} from './custom-entity-data.service';
import {LazyEntityCollectionService} from './lazy-entity-collection-service';
import {LazyLoaderFactoryService} from './lazy-loader-factory.service';
import {
  Attachment,
  Certificate,
  CertificateAgent,
  CertificateType,
  Division,
  Equipment,
  Examination, Incident, Notification, Account,
  ResponsibilityCenter, User, UserNotification, UserResponsibilityCenter, CorrectiveAction
} from '../../api/models';
import {EquipmentsService} from '../../api/services/equipments.service';
import {CertificatesService} from '../../api/services/certificates.service';
import {ResponsibilityCentersService} from '../../api/services/responsibility-centers.service';
import {DivisionsService} from '../../api/services/divisions.service';
import {AttachmentsService} from '../../api/services/attachments.service';
import {ExaminationsService} from '../../api/services/examinations.service';
import {CertificateAgentsService} from '../../api/services/certificate-agents.service';
import {CertificateTypesService} from '../../api/services/certificate-types.service';
import {NotificationsService} from '../../api/services/notifications.service';
import {UserNotificationsService} from '../../api/services/user-notifications.service';
import {IncidentsService} from '../../api/services/incidents.service';
import {UsersService} from '../../api/services/users.service';
import {AccountsService} from '../../api/services/accounts.service';
import {UserResponsibilityCentersService} from '../../api/services/user-responsibility-centers.service';
import {CorrectiveActionsService} from '../../api/services/corrective-actions.service';

/*
Контекст для получения справочников сущностей с сервера и кэширования их в памяти приложения
 */
@Injectable({
  providedIn: 'root',
})
export class EntityDataContext extends EntityServicesBase {
  public readonly equipments = this.createAndRegisterCollectionService<Equipment>('Equipment');
  public readonly certificates = this.createAndRegisterCollectionService<Certificate>('Certificate');
  public readonly responsibilityCenters = this.createAndRegisterCollectionService<ResponsibilityCenter>('ResponsibilityCenter');
  public readonly divisions = this.createAndRegisterCollectionService<Division>('Division');
  public readonly attachments = this.createAndRegisterCollectionService<Attachment>('Attachment');
  public readonly examinations = this.createAndRegisterCollectionService<Examination>('Examination');
  public readonly certificateAgents = this.createAndRegisterCollectionService<CertificateAgent>('CertificateAgent');
  public readonly certificateTypes = this.createAndRegisterCollectionService<CertificateType>('CertificateType');
  public readonly notifications = this.createAndRegisterCollectionService<Notification>('Notification');
  public readonly incidents = this.createAndRegisterCollectionService<Incident>('Incident');
  public readonly userNotifications = this.createAndRegisterCollectionService<UserNotification>('UserNotification');
  public readonly users = this.createAndRegisterCollectionService<User>('User');
  public readonly accounts = this.createAndRegisterCollectionService<Account>('Account');
  public readonly userResponsibilityCenters = this.createAndRegisterCollectionService<UserResponsibilityCenter>('UserResponsibilityCenter');
  public readonly correctiveActions = this.createAndRegisterCollectionService<CorrectiveAction>('CorrectiveAction');

  constructor(
    entityServicesElements: EntityServicesElements,
    private elementsFactory: EntityCollectionServiceElementsFactory,
    private lazyLoaderFactory: LazyLoaderFactoryService,
    private entityDataService: EntityDataService,
    private equipmentApi: EquipmentsService,
    private certificateApi: CertificatesService,
    private responsibilityCenterApi: ResponsibilityCentersService,
    private divisionApi: DivisionsService,
    private attachmentApi: AttachmentsService,
    private examinationApi: ExaminationsService,
    private certificateAgentApi: CertificateAgentsService,
    private certificateTypeApi: CertificateTypesService,
    private notificationApi: NotificationsService,
    private userNotificationApi: UserNotificationsService,
    private incidentApi: IncidentsService,
    private userApi: UsersService,
    private accountApi: AccountsService,
    private userResponsibilityCenterApi: UserResponsibilityCentersService,
    private correctiveActionApi: CorrectiveActionsService,
  ) {
    super(entityServicesElements);

    this.createAndRegisterDataService('Equipment', {
      getAll: () =>
        equipmentApi
          .apiEquipmentsGet$Json(),
      getById: (id: number) =>
        equipmentApi
          .apiEquipmentsIdGet$Json({ id })
    });

    this.createAndRegisterDataService('Certificate', {
      getAll: () =>
        certificateApi
          .apiCertificatesGet$Json(),
      getById: (id: number) =>
        certificateApi
          .apiCertificatesIdGet$Json({ id })
    });

    this.createAndRegisterDataService('ResponsibilityCenter', {
      getAll: () =>
        responsibilityCenterApi
          .apiResponsibilityCentersGet$Json(),
      getById: (id: number) =>
        responsibilityCenterApi
          .apiResponsibilityCentersIdGet$Json({ id })
    });

    this.createAndRegisterDataService('Division', {
      getAll: () =>
        divisionApi
          .apiDivisionsGet$Json(),
      getById: (id: number) =>
        responsibilityCenterApi
          .apiResponsibilityCentersIdGet$Json( { id })
    });

    this.createAndRegisterDataService('Attachment', {
      getAll: () =>
        attachmentApi
          .apiAttachmentsGet$Json(),
      getById: (id: number) =>
        attachmentApi
          .apiAttachmentsIdGet$Json( { id })
    });

    this.createAndRegisterDataService('Examination', {
      getAll: () =>
        examinationApi
          .apiExaminationsGet$Json(),
      getById: (id: number) =>
        examinationApi
          .apiExaminationsIdGet$Json({ id })
    });

    this.createAndRegisterDataService('CertificateAgent', {
      getAll: () =>
        certificateAgentApi
          .apiCertificateAgentsGet$Json(),
      getById: (id: number) =>
        certificateAgentApi
          .apiCertificateAgentsIdGet$Json( { id })
    });

    this.createAndRegisterDataService('CertificateType', {
      getAll: () =>
        certificateTypeApi
          .apiCertificateTypesGet$Json(),
      getById: (id: number) =>
        certificateTypeApi
          .apiCertificateTypesIdGet$Json( { id })
    });

    this.createAndRegisterDataService('Notification', {
      getAll: () =>
        this.notificationApi
          .apiNotificationsGet$Json(),
      getById: (id: number) =>
        this.notificationApi
          .apiNotificationsIdGet$Json( { id })
    });

    this.createAndRegisterDataService('UserNotification', {
      getAll: () =>
        this.userNotificationApi
          .apiUserNotificationsGet$Json(),
      getById: (id: number) =>
        this.userNotificationApi
          .apiUserNotificationsIdGet$Json( { id })
    });

    this.createAndRegisterDataService('Incident', {
      getAll: () =>
        this.incidentApi
          .apiIncidentsGet$Json(),
      getById: (id: number) =>
        incidentApi
          .apiIncidentsIdGet$Json( { id })
    });

    this.createAndRegisterDataService('User', {
      getAll: () =>
        this.userApi
          .apiUsersGet$Json(),
      getById: (id: number) =>
        userApi
          .apiUsersIdGet$Json({ id })
    });

    this.createAndRegisterDataService('Account', {
      getAll: () =>
        this.accountApi
          .apiAccountsGet$Json(),
      getById: (id: number) =>
        accountApi
          .apiAccountsIdGet$Json({ id })
    });

    this.createAndRegisterDataService('UserResponsibilityCenter', {
      getAll: () =>
        this.userResponsibilityCenterApi
          .apiUserResponsibilityCentersGet$Json(),
      getById: (id: number) => undefined
    });

    this.createAndRegisterDataService('CorrectiveAction', {
      getAll: () =>
        this.correctiveActionApi
          .apiCorrectiveActionsGet$Json(),
      getById: (id: number) =>
        correctiveActionApi
          .apiCorrectiveActionsIdGet$Json({ id })
    });
  }

  private createAndRegisterCollectionService<T>(entityName: string): LazyEntityCollectionService<T> {
    // Регистрируем entityCollectionService
    const collectionService = new LazyEntityCollectionService<T>(
      entityName,
      this.elementsFactory,
      this.lazyLoaderFactory
    );
    this.registerEntityCollectionService<T>(collectionService);

    return collectionService;
  }

  private createAndRegisterDataService<T>(entityName: string, options: CustomEntityDataServiceOptions<T>): CustomEntityDataService<T> {
    // Регистрируем entityDataService
    const entityDataService = new CustomEntityDataService<T>(entityName, options);
    this.entityDataService.registerService(entityName, entityDataService);

    return entityDataService;
  }

  clearAllCache(): void {
    for (const key in this) {
      if (!this.hasOwnProperty(key)) {
        return;
      }

      const property = this[key];

      if (property instanceof LazyEntityCollectionService) {
        property.clearCache();
      }
    }
  }
}
