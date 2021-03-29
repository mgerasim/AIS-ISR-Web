import {Component, OnDestroy, OnInit} from '@angular/core';
import {CorrectiveAction} from '../../../api/models/corrective-action';
import {User} from '../../../api/models/user';
import {EntityDataContext} from '../../../core/entity/entity-data-context.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {ErrorHandlerService} from '../../../core/errors/error-handler.service';
import {combineLatest} from 'rxjs';
import {Equipment} from '../../../api/models/equipment';
import {Division} from '../../../api/models/division';
import {UsersService} from '../../../api/services/users.service';
import {showSuccess} from '../../../shared/utils/message-utils';
import {CorrectiveActionsService} from '../../../api/services/corrective-actions.service';
import {CorrectiveActionStatus} from '../../../api/models/corrective-action-status';
import {PermissionService} from '../../../core/services/permission.service';

type DataSourceItem = {
  correctiveAction: CorrectiveAction,
  creator: User,
  performer?: User,
  equipment: Equipment,
  division: Division
};

@UntilDestroy()
@Component({
  selector: 'app-corrective-actions-table',
  templateUrl: './corrective-actions-table.component.html',
  styleUrls: ['./corrective-actions-table.component.scss']
})
export class CorrectiveActionsTableComponent implements OnInit, OnDestroy {

  dataSource: DataSourceItem[];

  users: User[] = [];

  statuses = this.permissionService.statuses;

  constructor(
    private entityDataContext: EntityDataContext,
    private correctiveActionsService: CorrectiveActionsService,
    private permissionService: PermissionService,
    private errorHandler: ErrorHandlerService,
  ) { }

  ngOnInit(): void {
    combineLatest([
      this.entityDataContext.correctiveActions.getListLazy(),
      this.entityDataContext.users.getListLazy(),
      this.entityDataContext.equipments.getListLazy(),
      this.entityDataContext.divisions.getListLazy(),
    ]).pipe(untilDestroyed(this)).subscribe(([correctiveActions, users, equipments, divisions]) => {
      this.users = users;
      this.dataSource = correctiveActions.map(correctiveAction => {
        const creator = users.find(x => x.accountId === correctiveAction.createdById);
        if (!creator) {
          throw new Error(`Не найден пользователь по идентификатору ${correctiveAction.createdById}, создавший корректирующее мероприятие ${correctiveAction.title}`);
        }
        const performer = users.find(x => x.accountId === correctiveAction.performerId);
        const equipment = equipments.find(x => x.id === correctiveAction.equipmentId);
        if (!equipment) {
          throw new Error(`Не найдено оборудование по идентификатору ${correctiveAction.equipmentId}, для корректирующего мероприятия ${correctiveAction.title}`);
        }
        const division = divisions.find(x => x.id === equipment.divisionId);
        if (!division) {
          throw new Error(`Не найдено подразделение по идентификатору ${equipment.divisionId}, для корректирующего мероприятия ${correctiveAction.title} и оборудование ${equipment.id}`);
        }
        const item = {
          correctiveAction: {...correctiveAction},
          creator,
          performer,
          equipment,
          division,
        } as DataSourceItem;
        return item;
      });
    }, error => {
      this.errorHandler.handle(error);
    });
  }

  onSelectionChanged($event: any): void {

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
  }

  onCellDblClick($event: any): void {

  }

  onRowPrepared($event: any): void {

  }

  ngOnDestroy(): void {
  }

  onPerformerChanged(correctiveAction: CorrectiveAction): void {
    this.correctiveActionsService.apiCorrectiveActionsIdPut({id: correctiveAction.id, body: correctiveAction}).subscribe(() => {
      showSuccess('Исполнитель успешно назначен!');
    }, error => {
      this.errorHandler.handle(error);
    });
  }

  onStatusChanged(correctiveAction: CorrectiveAction): void {
    this.correctiveActionsService.apiCorrectiveActionsIdPut({id: correctiveAction.id, body: correctiveAction}).subscribe(() => {
      showSuccess('Статус успешно изменён!');
    }, error => {
      this.errorHandler.handle(error);
    });
  }
}
