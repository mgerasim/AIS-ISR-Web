import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Equipment} from '../../../api/models/equipment';
import {EntityDataContext} from '../../../core/entity/entity-data-context.service';
import {CorrectiveAction} from '../../../api/models/corrective-action';
import {ErrorHandlerService} from '../../../core/errors/error-handler.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-corrective-action-indicator',
  templateUrl: './corrective-action-indicator.component.html',
  styleUrls: ['./corrective-action-indicator.component.scss']
})
export class CorrectiveActionIndicatorComponent implements OnInit, OnDestroy {

  @Input() equipment: Equipment;
  correctiveActions: CorrectiveAction[] = [];

  constructor(
    private entityDataContext: EntityDataContext,
    private errorHandler: ErrorHandlerService,
  ) { }

  ngOnInit(): void {
    this.entityDataContext.correctiveActions.getListLazy().pipe(untilDestroyed(this)).subscribe(correctiveActions => {
      this.correctiveActions = correctiveActions.filter(x => x.equipmentId === this.equipment.id);
    }, error => {
      this.errorHandler.handle(error);
    });
  }

  ngOnDestroy(): void {
  }

}
