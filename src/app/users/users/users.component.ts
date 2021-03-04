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
import {ResponsibilityCentersService} from '../../api/services/responsibility-centers.service';

type DataSourceItem = {
  user: User,
  division?: Division,
  account: Account
}

@UntilDestroy()
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  dataSource: DataSourceItem[];
  selectedRowKeys: DataSourceItem[];
  roles = [
    {
      id: Role.User,
      title: 'Пользователь',
      disabled: false
    },
    {
      id: Role.Admin,
      title: 'Администратор',
      disabled: false
    },
    {
      id: Role.SuperAdmin,
      title: 'Супер Администратор',
      disabled: this.authService.currentUser.account.role !== Role.SuperAdmin
    }
  ];
  divisions: Division[];
  userResponsibilityCenters = new Array<ResponsibilityCenter>();
  responsibilityCenters: ResponsibilityCenter[];

  constructor(
    private entityDataContext: EntityDataContext,
    private errorHandlerService: ErrorHandlerService,
    private usersService: UsersService,
    private accountsService: AccountsService,
    private titleService: TitleService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Пользователи');
    combineLatest([
      this.entityDataContext.users.getListLazy(),
      this.entityDataContext.divisions.getListLazy(),
      this.entityDataContext.accounts.getListLazy(),
      this.entityDataContext.responsibilityCenters.getListLazy(),
      this.entityDataContext.userResponsibilityCenters.getListLazy(),
    ]).pipe(
      untilDestroyed(this)
    ).subscribe(([users, divisions, accounts, responsibilityCenters, userResponsibilityCenters]) => {
      this.divisions = divisions;
      this.responsibilityCenters = responsibilityCenters;
      const userResponsibilityCenterIds = userResponsibilityCenters.filter(x => x.userId === this.authService.currentUser.id).map(x => x.responsibilityCenterId);
      this.userResponsibilityCenters = this.responsibilityCenters.filter(x => userResponsibilityCenterIds.includes(x.id));
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

  onRoleChanged(account: Account): void {
    console.log(account);
    this.accountsService.apiAccountsIdPut({id: account.id, body: account}).subscribe(() => {
      showSuccess(`Роль пользователя успешна изменена`);
    }, error => this.errorHandlerService.handle(error));
  }

  onDivisionChanged(user: User): void {
    this.usersService.apiUsersIdPut({id: user.id, body: user}).subscribe(() => {
      showSuccess(`Подразделение успешно установлено для пользоватлея ${user.displayName}`);
    }, error => this.errorHandlerService.handle(error));
  }

  responsibilityCentersChanged(user: User): void {
    console.log(user);
    console.log(this.userResponsibilityCenters);
    this.usersService.apiUsersResponsibilityCenterIdPut$Json({id: user.id, body: this.userResponsibilityCenters}).subscribe(() => {
      showSuccess(`Принадлежность к центрам ответсвенности успешно обновлено для пользоватлея ${user.displayName}`);
    }, error => this.errorHandlerService.handle(error));
  }
}
