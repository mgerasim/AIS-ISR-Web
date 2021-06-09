import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {BatchEquipmentOperationEditRequest} from '../../api/models/batch-equipment-operation-edit-request';
import {Division} from '../../api/models/division';
import {ResponsibilityCenter} from '../../api/models/responsibility-center';
import {EntityDataContext} from '../../core/entity/entity-data-context.service';
import {ErrorHandlerService} from '../../core/errors/error-handler.service';
import {combineLatest} from 'rxjs';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {Certificate} from '../../api/models/certificate';
import {Equipment} from '../../api/models/equipment';
import {EquipmentsBatchService} from '../../api/services/equipments-batch.service';
import {showSuccess} from '../../shared/utils/message-utils';
import {LoadingService} from '../../core/services/loading.service';
import {ExploitationPeriodUnit} from '../../api/models/exploitation-period-unit';

@UntilDestroy()
@Component({
  selector: 'app-batch-equipment-operation',
  templateUrl: './batch-equipment-operation.component.html',
  styleUrls: ['./batch-equipment-operation.component.scss']
})
export class BatchEquipmentOperationComponent implements OnInit, OnDestroy {

  @Input() equipments: Equipment[];
  @Output() end = new EventEmitter();

  public exploitationPeriodUnits = [
    {
      id: ExploitationPeriodUnit.UnitYear,
      title: 'Год'
    },
    {
      id: ExploitationPeriodUnit.UnitHour,
      title: 'Час'
    }
  ];

  request?: BatchEquipmentOperationEditRequest = {};

  public divisions: Division[];

  public responsibilityCenters: ResponsibilityCenter[];

  public certificates: Certificate[];

  constructor(
    private entityDataContext: EntityDataContext,
    private errorHandle: ErrorHandlerService,
    private equipmentsBatchService: EquipmentsBatchService,
    private loadingService: LoadingService,
  ) { }

  ngOnInit(): void {
    combineLatest([
      this.entityDataContext.responsibilityCenters.getListLazy(),
      this.entityDataContext.divisions.getListLazy(),
      this.entityDataContext.certificates.getListLazy(),
    ])
      .pipe(untilDestroyed(this))
      .subscribe(([responsibilityCenters, divisions, certificates]) => {
        this.divisions = divisions;
        this.responsibilityCenters = responsibilityCenters;
        this.certificates = certificates;
        this.request = {};
        this.request.equipmentIds = this.equipments.map(x => x.id);
      }, error => this.errorHandle.handle(error));
  }

  apply(): void {
    this.loadingService.show();
    this.equipmentsBatchService.apiEquipmentsBatchEditPost({body: this.request})
      .subscribe(() => {
          this.loadingService.hide();
          showSuccess('Массовое изменение параметров успешно выполнено!');
          this.end.emit();
        },
      error => this.errorHandle.handle(error));
  }

  ngOnDestroy(): void {
  }
}
