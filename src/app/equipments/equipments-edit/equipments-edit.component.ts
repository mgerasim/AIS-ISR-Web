import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Equipment} from '../../api/models/equipment';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {switchMap} from 'rxjs/operators';
import {shareEntityId} from '../../shared/utils/routing-utils';
import {EntityDataContext} from '../../core/entity/entity-data-context.service';
import {ActivatedRoute} from '@angular/router';
import {ErrorHandlerService} from '../../core/errors/error-handler.service';
import {generateYears} from '../../shared/utils/year-utils';
import {showSuccess} from '../../shared/utils/message-utils';
import {NavigatorService} from '../../core/routing/navigator.service';
import {EquipmentsService} from '../../api/services/equipments.service';
import {Division} from '../../api/models/division';
import {ResponsibilityCenter} from '../../api/models/responsibility-center';
import {combineLatest} from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-equipments-edit',
  templateUrl: './equipments-edit.component.html',
  styleUrls: ['./equipments-edit.component.scss']
})
export class EquipmentsEditComponent implements OnInit, OnDestroy {

  public equipment: Equipment;

  entityId = this.route.params.pipe(shareEntityId());

  constructor(
    private route: ActivatedRoute,
    private entityDataContext: EntityDataContext,
    private equipmentsService: EquipmentsService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.entityId
      .pipe(
        untilDestroyed(this),
        switchMap((id: number) => this.entityDataContext.equipments.getByIdLazy(id))
      )
      .subscribe(
        (equipment) => {
          this.equipment = {...equipment};
        },
        error => this.errorHandler.handle(error)
      );
  }

  ngOnDestroy(): void {
  }
}
