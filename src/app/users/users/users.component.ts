import {Component, OnDestroy, OnInit} from '@angular/core';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {EntityDataContext} from '../../core/entity/entity-data-context.service';
import {ErrorHandlerService} from '../../core/errors/error-handler.service';
import {User} from '../../api/models/user';
import {Division} from '../../api/models/division';
import {combineLatest} from 'rxjs';
import {Account, ResponsibilityCenter, Role} from '../../api/models';
import {UsersService} from '../../api/services/users.service';
import {showSuccess} from '../../shared/utils/message-utils';
import {TitleService} from '../../core/services/title.service';
import {AuthService} from '../../auth/auth.service';
import {AccountsService} from '../../api/services/accounts.service';
import {PermissionService} from '../../core/services/permission.service';

type DataSourceItem = {
  user: User,
  division?: Division,
  account: Account
};

@UntilDestroy()
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  dataSource: DataSourceItem[];
  selectedRowKeys: DataSourceItem[];
  divisions: Division[];
  responsibilityCenters: ResponsibilityCenter[];

  constructor(
    private entityDataContext: EntityDataContext,
    private errorHandlerService: ErrorHandlerService,
    private usersService: UsersService,
    private accountsService: AccountsService,
    private titleService: TitleService,
    private permissionService: PermissionService,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Пользователи');
    combineLatest([
      this.entityDataContext.users.getListLazy(),
      this.entityDataContext.divisions.getListLazy(),
      this.entityDataContext.accounts.getListLazy(),
      this.entityDataContext.responsibilityCenters.getListLazy(),
    ]).pipe(
      untilDestroyed(this)
    ).subscribe(([users, divisions, accounts, responsibilityCenters]) => {
      this.divisions = divisions;
      this.responsibilityCenters = responsibilityCenters;
      this.dataSource = users.map(user => {
        const division = divisions.find(x => x.id === user.divisionId);
        const account = accounts.find(x => x.id === user.accountId);
        if (account === undefined) {
          throw new Error('account is null');
        }
        return  {
          user: {...user},
          division: {...division},
          account: {...account}
        } as DataSourceItem;
      });
    }, error => this.errorHandlerService.handle(error));
  }

  ngOnDestroy(): void {
  }

  onCellDblClick(item: DataSourceItem): void {

  }

  onSelectionChanged(item: DataSourceItem): void {

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

  onDivisionChanged(user: User): void {
    this.usersService.apiUsersIdPut({id: user.id, body: user}).subscribe(() => {
      showSuccess(`Подразделение успешно установлено для пользоватлея ${user.displayName}`);
    }, error => this.errorHandlerService.handle(error));
  }

  onAllowEmailChanged(user: User): void {
    this.usersService.apiUsersIdPut({id: user.id, body: user}).subscribe(() => {
      showSuccess(`Разрешение на получение эдектронной почты успешно изменено для пользоватлея ${user.displayName}`);
    }, error => this.errorHandlerService.handle(error));
  }
}
