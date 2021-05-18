import {Component, OnDestroy, OnInit} from '@angular/core';
import {Equipment} from '../../../api/models/equipment';
import {ResponsibilityCenter} from '../../../api/models/responsibility-center';
import {EquipmentsService} from '../../../core/services/equipments.service';
import {ResponsibilityCentersService} from '../../../api/services/responsibility-centers.service';
import {NavigatorService} from '../../../core/routing/navigator.service';
import CustomStore from 'devextreme/data/custom_store';
import {SidebarService} from '../../sidebar.service';
import {EntityDataContext} from '../../../core/entity/entity-data-context.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {combineLatest} from 'rxjs';
import {Division} from '../../../api/models/division';
import {Examination} from '../../../api/models/examination';
import {toDate} from '../../../shared/utils/date-utils';
import {Certificate} from '../../../api/models/certificate';
import {CertificateType} from '../../../api/models/certificate-type';
import {CertificateAgent} from '../../../api/models/certificate-agent';
import {switchMap, tap} from 'rxjs/operators';
import {Settings} from '../../../api/models/settings';
import {SettingsService} from '../../../api/services/settings.service';
import {Attachment} from '../../../api/models/attachment';
import {AttachmentCategory} from '../../../api/models/attachment-category';

class DataSourceItem {
  equipment: Equipment;
  responsibilityCenter: ResponsibilityCenter;
  division?: Division;
  examination?: Examination;
  certificate?: Certificate;
  certificateType?: CertificateType;
  certificateAgent?: CertificateAgent;
  settings: Settings;
  pziAttachCount: number;
  exmAttachCount: number;
  otherAttachCount: number;
}

@UntilDestroy()
@Component({
  selector: 'app-equipments-table',
  templateUrl: './equipments-table.component.html',
  styleUrls: ['./equipments-table.component.scss']
})
export class EquipmentsTableComponent implements OnInit, OnDestroy {

  /**
   * Источник данных для таблицы
   */
  dataSource: DataSourceItem[];

  equipments: Equipment[];
  settings: Settings;

  responsibilityCenters: ResponsibilityCenter[];
  certificateTypes: CertificateType[];
  certificateAgents: CertificateAgent[];
  attachments: Attachment[];
  value: any;

  gridDataSource: any;
  popupVisible = false;
  equipment: Equipment;

  constructor(
    public equipmentsService: EquipmentsService,
    public responsibilityCentersService: ResponsibilityCentersService,
    public navigationService: NavigatorService,
    public sidebarService: SidebarService,
    private entityDataContext: EntityDataContext,
    private settingsService: SettingsService
  ) {  }

  ngOnInit(): void {

    combineLatest([
      this.entityDataContext.certificateTypes.getListLazy(),
      this.entityDataContext.certificateAgents.getListLazy(),
      this.entityDataContext.attachments.getListLazy(),
    ]).pipe(
      untilDestroyed(this),
      tap(([certificateTypes, certificateAgents, attachments]) => {
        this.certificateTypes = certificateTypes;
        this.certificateAgents = certificateAgents;
        this.attachments = attachments;
      }),
      switchMap(() => combineLatest([
        this.entityDataContext.equipments.getListLazy(),
        this.entityDataContext.responsibilityCenters.getListLazy(),
        this.entityDataContext.divisions.getListLazy(),
        this.entityDataContext.examinations.getListLazy(),
        this.entityDataContext.certificates.getListLazy(),
        this.settingsService.apiSettingsGet$Json()
      ]))
    ).subscribe(([equipments,
                               responsibilityCenters,
                               divisions,
                               examinations,
                               certificates,
                               settings
                           ]) => {
      this.settings = settings;
      this.dataSource = equipments.map(equipment => {
        if (equipment.responsibilityCenterId === null && equipment.responsibilityCenterId === undefined) {
          throw new Error(`У оборудования ${equipment.code}: ${equipment.title} не задан центр ответственности`);
        }

        const responsibilityCenter = responsibilityCenters.find(x => x.id === equipment.responsibilityCenterId);
        if (responsibilityCenter === undefined) {
          throw new Error(`Не найден центр ответственности по идентификатору ${equipment.responsibilityCenterId} для оборудования ${equipment.code}: ${equipment.title}`);
        }

        const division = divisions.find(x => x.id === equipment.divisionId);
        const examination = examinations.find(x => x.id === equipment.examination?.id || null);
        const certificate = certificates.find(x => x.id === equipment.certificateId);

        let certificateType: CertificateType;
        let certificateAgent: CertificateAgent;
        if (certificate) {
          certificateType = this.certificateTypes.find(x => x.id === certificate.certificateTypeId);
          if (certificateType === undefined) {
            throw new Error('Не найден тип сертификата');
          }
          certificateAgent = this.certificateAgents.find(x => x.id === certificate.certificateAgentId);
          if (certificateAgent === undefined) {
            throw new Error('Не найдена организация сертификата');
          }
        }

        const item = new DataSourceItem();
        item.equipment = equipment;
        item.responsibilityCenter = responsibilityCenter;
        item.division = division;
        item.examination = examination;
        item.certificate = certificate;
        item.certificateType = certificateType;
        item.certificateAgent = certificateAgent;
        item.settings = settings;
        item.pziAttachCount = this.attachments.filter(x => x.equipmentId === equipment.id && x.attachmentCategory === AttachmentCategory.Passport).length;
        item.exmAttachCount = this.attachments.filter(x => x.equipmentId === equipment.id && x.attachmentCategory === AttachmentCategory.Examination).length;
        item.otherAttachCount = this.attachments.filter(x => x.equipmentId === equipment.id && x.attachmentCategory === AttachmentCategory.Other).length;
        return item;
      });
      console.log(this.dataSource);
    });
    this.gridDataSource = this.makeAsyncDataSource();
  }

  makeAsyncDataSource(): CustomStore {
    return new CustomStore({
      loadMode: 'raw',
      key: 'code',
      load: () => {
        return this.responsibilityCentersService.apiResponsibilityCentersGet$Json().toPromise();
      }
    });
  }

  onToolbarPreparing(e): void {
    for (const item of e.toolbarOptions.items) {
      item.location = 'after';
      item.showText = '';
    }
    e.toolbarOptions.items.push({
      location: 'center',
      template: 'titleTemplate',
    });
  }

  valueChange(selected: ResponsibilityCenter[]): void {
    this.equipments = this.equipments.filter(x => x.responsibilityCenter && selected.map(r => r.id).includes(x.responsibilityCenter.id));
  }

  onCellDblClick(e: {data: DataSourceItem}): void {
    this.equipment = e.data.equipment;
    this.popupVisible = true;
  }

  onSelectionChanged(e: {selectedRowsData: DataSourceItem[]}): void {
    if (e.selectedRowsData[0]) {
      this.sidebarService.equipment$.next(e.selectedRowsData[0].equipment);
    }
  }

  ngOnDestroy(): void {
  }

  toDate(dateString): Date {
    return toDate(dateString);
  }

  customizeCount(data): string {
    console.log(data);
    return 'Количество: ' + data.value.toString();
  }

  onRowPrepared(e: any): void {
    if (!e.data) {
      return;
    }
  }
}
