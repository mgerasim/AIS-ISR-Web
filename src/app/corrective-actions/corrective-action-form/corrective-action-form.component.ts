import {Component, ErrorHandler, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CorrectiveAction} from '../../api/models/corrective-action';
import {CorrectiveActionsService} from '../../api/services/corrective-actions.service';
import {showSuccess} from '../../shared/utils/message-utils';
import {EntityDataContext} from '../../core/entity/entity-data-context.service';
import {User} from '../../api/models/user';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {Role} from '../../api/models/role';
import {CorrectiveActionStatus} from '../../api/models';

@UntilDestroy()
@Component({
  selector: 'app-corrective-action-form',
  templateUrl: './corrective-action-form.component.html',
  styleUrls: ['./corrective-action-form.component.scss']
})
export class CorrectiveActionFormComponent implements OnInit {

  @Input() correctiveAction: CorrectiveAction;
  @Output() save = new EventEmitter();

  users: User[];

  statuses = [
    {
      id: CorrectiveActionStatus.None,
      title: 'Создано',
      disabled: false
    },
    {
      id: CorrectiveActionStatus.InWork,
      title: 'В работе',
      disabled: false
    },
    {
      id: CorrectiveActionStatus.Completed,
      title: 'Выполнено',
      disabled: false
    },
    {
      id: CorrectiveActionStatus.Confirmed,
      title: 'Подтверждено',
      disabled: false
    }
  ];

  constructor(
    private correctiveActionsService: CorrectiveActionsService,
    private entityDataContext: EntityDataContext,
    private errorHandler: ErrorHandler,
  ) { }

  ngOnInit(): void {
    this.entityDataContext.users.getListLazy().pipe(untilDestroyed(this)).subscribe((users) => {
      this.users = users;
    });
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
