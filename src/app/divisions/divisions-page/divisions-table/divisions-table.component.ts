import {Component, OnDestroy, OnInit} from '@angular/core';
import {Division} from '../../../api/models/division';
import {EntityDataContext} from '../../../core/entity/entity-data-context.service';
import {ErrorHandlerService} from '../../../core/errors/error-handler.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {combineLatest} from 'rxjs';
import {DivisionsPageSidebarService} from '../divisions-page-sidebar.service';
import {User} from '../../../api/models/user';
import {AuthService} from '../../../auth/auth.service';
import {TitleService} from '../../../core/services/title.service';

export type DataSourceItem = {
  division: Division,
  equipmentCount: number,
  isParent: boolean
};

@UntilDestroy()
@Component({
  selector: 'app-divisions-table',
  templateUrl: './divisions-table.component.html',
  styleUrls: ['./divisions-table.component.scss']
})
export class DivisionsTableComponent implements OnInit, OnDestroy {

  dataSource: DataSourceItem[];

  user: User;

  constructor(
    private authService: AuthService,
    private entityDataContext: EntityDataContext,
    private errorHandler: ErrorHandlerService,
    private sidebarService: DivisionsPageSidebarService,
    private titleService: TitleService
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Подразделения');

    this.user = this.authService.currentUser;

    combineLatest([
      this.entityDataContext.equipments.getListLazy(),
      this.entityDataContext.divisions.getListLazy()
    ])
      .pipe(untilDestroyed(this))
      .subscribe(([equipments, divisions]) => {
        this.dataSource = divisions.map(division => {
          const equipmentCount = equipments.filter(x => x.divisionId === division.id).length;
          const isParent = divisions.filter(x => x.parentId === division.id).length > 0;
          const item: DataSourceItem = {
            division,
            equipmentCount,
            isParent
          };
          return item;
        });
      }, error => {
        this.errorHandler.handle(error);
      });
  }



  onSelectionChanged(e: {selectedRowsData: DataSourceItem[]}): void {
    this.sidebarService.dataSourceItem$.next(e.selectedRowsData);
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

  ngOnDestroy(): void {
  }
}
