import {Component, Input, OnInit} from '@angular/core';
import {Equipment} from '../../../api/models/equipment';
import {EntityDataContext} from '../../../core/entity/entity-data-context.service';
import {CorrectiveAction} from '../../../api/models/corrective-action';
import {ErrorHandlerService} from '../../../core/errors/error-handler.service';

@Component({
  selector: 'app-corrective-action-indicator',
  templateUrl: './corrective-action-indicator.component.html',
  styleUrls: ['./corrective-action-indicator.component.scss']
})
export class CorrectiveActionIndicatorComponent implements OnInit {

  @Input() equipment: Equipment;
  correctiveActions: CorrectiveAction[] = [];

  get hasCorrectiveAction(): boolean {
    return this.correctiveActions.length > 0;
  }

  constructor(
    private entityDataContext: EntityDataContext,
    private errorHandler: ErrorHandlerService,
  ) { }

  ngOnInit(): void {
    this.entityDataContext.correctiveActions.getListLazy().subscribe(correctiveActions => {
      this.correctiveActions = correctiveActions.filter(x => x.equipmentId === this.equipment.id);
    }, error => {
      this.errorHandler.handle(error);
    });
  }

}
