import {Component, OnDestroy, OnInit} from '@angular/core';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {EntityDataContext} from '../../core/entity/entity-data-context.service';
import {ErrorHandlerService} from '../../core/errors/error-handler.service';
import {NavigatorService} from '../../core/routing/navigator.service';
import {AuthService} from '../../auth/auth.service';
import {TitleService} from '../../core/services/title.service';
import {Role} from '../../api/models/role';
import {showWarning} from '../../shared/utils/message-utils';
import {ResponsibilityCenter} from '../../api/models/responsibility-center';
import {combineLatest} from 'rxjs';

interface DataSourceItem {
  responsibilityCenter: ResponsibilityCenter;
  equipmentCount: number;
  userCount: number;
};

@UntilDestroy()
@Component({
  selector: 'app-responsibility-centers',
  templateUrl: './responsibility-centers.component.html',
  styleUrls: ['./responsibility-centers.component.scss']
})
export class ResponsibilityCentersComponent implements OnInit, OnDestroy {
  dataSource: DataSourceItem[];
  selectedRowKeys: DataSourceItem[];

  constructor(
    private entityDataContext: EntityDataContext,
    private errorHandler: ErrorHandlerService,
    private navigatorService: NavigatorService,
    private authService: AuthService,
    private titleService: TitleService,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Центры ответсвенности');
    combineLatest([
      this.entityDataContext.responsibilityCenters.getListLazy(),
      this.entityDataContext.equipments.getListLazy(),
      this.entityDataContext.userResponsibilityCenters.getListLazy()
      ])
      .pipe(untilDestroyed(this))
      .subscribe(([responsibilityCenters, equipments, userResponsibilityCenters]) => {
        this.dataSource = responsibilityCenters.map(responsibilityCenter => {
          const item = {
            responsibilityCenter,
            equipmentCount: equipments.filter(x => x.responsibilityCenterId === responsibilityCenter.id).length,
            userCount: userResponsibilityCenters.filter(x => x.responsibilityCenterId === responsibilityCenter.id).length,
          } as DataSourceItem;
          return item;
        });
      }, error => {
        this.errorHandler.handle(error);
      });
  }

  ngOnDestroy(): void {
  }

  onCellDblClick($event: any) {

  }

  onToolbarPreparing(e: any): void {
    for (const item of e.toolbarOptions.items) {
      item.location = 'after';
      item.showText = '';
    }
    e.toolbarOptions.items.push({
      location: 'before',
      template: 'actionAddTemplate',
    });
    e.toolbarOptions.items.push({
      location: 'before',
      template: 'actionEditTemplate',
    });
    e.toolbarOptions.items.push({
      location: 'before',
      template: 'actionShowTemplate',
    });
    e.toolbarOptions.items.push({
      location: 'center',
      template: 'titleTemplate',
    });
  }

  add(): void {
    if (this.authService.currentUser.account.role === Role.User) {
      showWarning('Данная операция доступна для Администратора.');
      return;
    }
    this.navigatorService.toResponsibilityCenterAdd();
  }

  edit(): void {
    if (this.authService.currentUser.account.role === Role.User) {
      showWarning('Данная операция доступна для Администратора.');
      return;
    }
    if (this.selectedRowKeys === undefined || this.selectedRowKeys.length === 0) {
      throw new Error('Отсутствует выделенние организации');
    }
    const dataSourceItem = this.selectedRowKeys[0];

    this.navigatorService.toResponsibilityCenterEdit(dataSourceItem.responsibilityCenter.id);
  }

  show(): void {
    if (this.selectedRowKeys === undefined || this.selectedRowKeys.length === 0) {
      throw new Error('Отсутствует выделенние организации');
    }
    const dataSourceItem = this.selectedRowKeys[0];

    this.navigatorService.toResponsibilityCenterShow(dataSourceItem.responsibilityCenter.id);
  }
}
