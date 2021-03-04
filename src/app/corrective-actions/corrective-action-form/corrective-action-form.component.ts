import {Component, Input, OnInit, Output, EventEmitter, ErrorHandler} from '@angular/core';
import {CorrectiveAction} from '../../api/models/corrective-action';
import {CorrectiveActionsService} from '../../api/services/corrective-actions.service';
import {showSuccess} from '../../shared/utils/message-utils';

@Component({
  selector: 'app-corrective-action-form',
  templateUrl: './corrective-action-form.component.html',
  styleUrls: ['./corrective-action-form.component.scss']
})
export class CorrectiveActionFormComponent implements OnInit {

  @Input() correctiveAction: CorrectiveAction;
  @Output() save = new EventEmitter();

  constructor(
    private correctiveActionsService: CorrectiveActionsService,
    private errorHandler: ErrorHandler,
  ) { }

  ngOnInit(): void {

  }

  saveCorrectiveAction(): void {
    this.correctiveActionsService.apiCorrectiveActionsPost$Json({body: this.correctiveAction}).subscribe(() => {
      showSuccess('Корректирующее мероприятие успешно создано');
      this.save.emit();
    }, error => {
      this.errorHandler.handleError(error);
    });
  }
}
