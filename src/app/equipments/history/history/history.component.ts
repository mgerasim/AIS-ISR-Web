import {Component, OnDestroy, OnInit} from '@angular/core';
import {EquipmentsService} from '../../../api/services/equipments.service';
import {shareEntityId} from '../../../shared/utils/routing-utils';
import {EntityDataContext} from '../../../core/entity/entity-data-context.service';
import {ErrorHandlerService} from '../../../core/errors/error-handler.service';
import {TitleService} from '../../../core/services/title.service';
import {ActivatedRoute} from '@angular/router';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {switchMap, tap} from 'rxjs/operators';
import {Examination} from '../../../api/models/examination';
import {combineLatest, of} from 'rxjs';
import {Equipment} from '../../../api/models/equipment';
import {NavigatorService} from '../../../core/routing/navigator.service';

@UntilDestroy()
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit, OnDestroy {

  entityId = this.route.params.pipe(shareEntityId());
  equipment: Equipment;

  equipments: Equipment[];

  constructor(
    private route: ActivatedRoute,
    private equipmentsService: EquipmentsService,
    private entityDataContext: EntityDataContext,
    private errorHandler: ErrorHandlerService,
    private titleService: TitleService,
    private navigatorService: NavigatorService,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('История изменения оборудования');
    this.entityId
      .pipe(
        untilDestroyed(this),
        switchMap((id: number) => this.entityDataContext.equipments.getByIdLazy(id)),
        tap(equipment => this.equipment = {...equipment}),
        switchMap(equipment => combineLatest([
          this.equipmentsService.apiEquipmentsIdHistoryGet$Json({id: equipment.id}),
          this.entityDataContext.certificates.getListLazy(),
          this.entityDataContext.accounts.getListLazy(),
          this.entityDataContext.divisions.getListLazy(),
          this.entityDataContext.responsibilityCenters.getListLazy(),
          this.entityDataContext.examinations.getListLazy(),
        ]))
      )
      .subscribe(
        ([equipments, certificates, accounts, divisions, responsibilityCenters, examinations]) => {
          equipments.forEach(equipment => {
            equipment.certificate = certificates.find(x => x.id === equipment.certificateId);
            equipment.updatedBy = accounts.find(x => x.id === equipment.updatedById);
            equipment.division = divisions.find(x => x.id === equipment.divisionId);
            equipment.responsibilityCenter = responsibilityCenters.find(x => x.id === equipment.responsibilityCenterId);
            equipment.examination = examinations.find(x => x.id === equipment.examinationId);
          });
          this.equipments = equipments;
        },
        error => this.errorHandler.handle(error)
      );
  }

  onToolbarPreparing(e: any): void {
    for (const item of e.toolbarOptions.items) {
      item.location = 'after';
      item.showText = '';
    }
    e.toolbarOptions.items.push({
      location: 'center',
      template: 'titleTemplate',
    });

    e.toolbarOptions.items.push({
      location: 'before',
      template: 'actionCardTemplate',
    });
  }

  showCard(): void {
    this.navigatorService.toEquipment(this.equipment.id);
  }

  onRowPrepared($event: any) {

  }

  ngOnDestroy(): void {
  }
}
