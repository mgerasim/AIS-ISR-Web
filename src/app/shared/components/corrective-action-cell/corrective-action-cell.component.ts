import {Component, Input, OnInit} from '@angular/core';
import {Equipment} from '../../../api/models/equipment';
import {EntityDataContext} from '../../../core/entity/entity-data-context.service';
import {ErrorHandlerService} from '../../../core/errors/error-handler.service';
import {CorrectiveAction} from '../../../api/models/corrective-action';

@Component({
  selector: 'app-corrective-action-cell',
  templateUrl: './corrective-action-cell.component.html',
  styleUrls: ['./corrective-action-cell.component.css']
})
export class CorrectiveActionCellComponent implements OnInit {

  @Input() equipment: Equipment;

  correctiveActions: CorrectiveAction[] = [];

  constructor(
    private entityDataContext: EntityDataContext,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.entityDataContext.correctiveActions.getListLazy().subscribe(correctiveActions => {
      this.correctiveActions = correctiveActions.filter(x => x.equipmentId === this.equipment.id);
    }, error => {
      this.errorHandler.handle(error);
    });
  }

}
