import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Equipment} from '../../api/models/equipment';
import {Division} from '../../api/models/division';
import {ResponsibilityCenter} from '../../api/models/responsibility-center';
import {combineLatest} from 'rxjs';
import {EntityDataContext} from '../../core/entity/entity-data-context.service';
import {ErrorHandlerService} from '../../core/errors/error-handler.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {EquipmentsService} from '../../api/services/equipments.service';
import {showSuccess} from '../../shared/utils/message-utils';
import {NavigatorService} from '../../core/routing/navigator.service';
import {Certificate} from '../../api/models/certificate';
import {ExploitationPeriodUnit} from '../../api/models/exploitation-period-unit';

@UntilDestroy()
@Component({
  selector: 'app-equipments-form',
  templateUrl: './equipments-form.component.html',
  styleUrls: ['./equipments-form.component.scss']
})
export class EquipmentsFormComponent implements OnInit, OnDestroy {

  @Input() equipment: Equipment;

  public divisions: Division[];

  public responsibilityCenters: ResponsibilityCenter[];

  public certificates: Certificate[];

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

  constructor(
    private entityDataContext: EntityDataContext,
    private errorHandle: ErrorHandlerService,
    private equipmentsService: EquipmentsService,
    private navigator: NavigatorService
  ) { }

  ngOnInit(): void {
    combineLatest([
      this.entityDataContext.responsibilityCenters.getListLazy(),
      this.entityDataContext.divisions.getListLazy(),
      this.entityDataContext.certificates.getListLazy()
      ])
      .pipe(untilDestroyed(this))
      .subscribe(([responsibilityCenters, divisions, certificates]) => {
      this.divisions = divisions;
      this.responsibilityCenters = responsibilityCenters;
      this.certificates = certificates;
    }, error => this.errorHandle.handle(error));
  }

  async save(): Promise<void> {
    try {
      if (this.equipment.id) {
        console.log(this.equipment);
        /// TODO: Переделать на Core сервис
        await this.equipmentsService.apiEquipmentsIdPut({id: this.equipment?.id, body: this.equipment}).toPromise();
        showSuccess(`Оборудование ${this.equipment.title} успешно обновлено`);
        this.entityDataContext.equipments.updateOneInCache(this.equipment);
        this.navigator.toEquipment(this.equipment.id);
      } else {
        console.log(this.equipment);
        this.equipment = await this.equipmentsService.apiEquipmentsPost$Json({body: this.equipment}).toPromise();
        showSuccess(`Оборудование ${this.equipment.title} успешно создано`);
        this.entityDataContext.equipments.addOneToCache(this.equipment);
        this.navigator.toEquipment(this.equipment.id);
      }
    }
    catch (e) {
      this.errorHandle.handle(e);
    }
  }

  ngOnDestroy(): void {
  }
}
