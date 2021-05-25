import {Component, OnDestroy, OnInit} from '@angular/core';
import {showSuccess, showWarning} from '../../../shared/utils/message-utils';
import {DivisionsPageSidebarService} from '../divisions-page-sidebar.service';
import {NavigatorService} from '../../../core/routing/navigator.service';
import {EntityDataContext} from '../../../core/entity/entity-data-context.service';
import {DivisionsService} from '../../../api/services/divisions.service';
import {ErrorHandlerService} from '../../../core/errors/error-handler.service';
import {Division} from '../../../api/models/division';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {EquipmentsService} from '../../../api/services/equipments.service';
import {take} from 'rxjs/operators';
import {DivisionsBatchService} from '../../../api/services/divisions-batch.service';
import {EquipmentsBatchService} from '../../../api/services/equipments-batch.service';
import {ifTrue} from 'codelyzer/util/function';
import {LoadingService} from '../../../core/services/loading.service';
import {Role} from '../../../api/models/role';
import {AuthService} from '../../../auth/auth.service';

@UntilDestroy()
@Component({
  selector: 'app-divisions-sidebar',
  templateUrl: './divisions-sidebar.component.html',
  styleUrls: ['./divisions-sidebar.component.scss']
})
export class DivisionsSidebarComponent implements OnInit, OnDestroy {

  public selectedDivision: Division;

  public actionId: number;

  public menu: any[] = [
    {
      id: 2,
      title: 'Создать подразделение',
      click: () => {
        if (this.authService.currentUser.account.role === Role.User) {
          showWarning('Данная операция доступна для Администратора.');
          return;
        }
        this.selectedDivision = {} as Division;
        this.popupDivisionForm = true;
      }
    },
    {
      id: 3,
      title: 'Редактировать подразделение',
      click: () => {
        if (this.authService.currentUser.account.role === Role.User) {
          showWarning('Данная операция доступна для Администратора.');
          return;
        }
        if (this.sidebarService.dataSourceItem$.value === undefined) {
          showWarning('Необходимо выделить подразделение в таблице');
          return;
        }
        this.selectedDivision = {...this.sidebarService.dataSourceItem$.value[0].division};
        this.popupDivisionForm = true;
      }
    },
    {
      id: 4,
      title: 'Удалить подразделение',
      click: () => {
        if (this.authService.currentUser.account.role === Role.User) {
          showWarning('Данная операция доступна для Администратора.');
          return;
        }
        if (this.sidebarService.dataSourceItem$.value === undefined || this.sidebarService.dataSourceItem$.value.length === 0) {
          showWarning('Необходимо выделить подразделение в таблице');
          return;
        }
        if (this.sidebarService.dataSourceItem$.value[0].equipmentCount > 0) {
          showWarning(`В подразделении имеется оборудование, в количестве ${this.sidebarService.dataSourceItem$.value[0].equipmentCount}. Необходимо перенести оборудование в другое подразделение!`);
          return;
        }
        if (this.sidebarService.dataSourceItem$.value[0].isParent) {
          showWarning(`Данное подразделение является родительским для других подразделений. Необходимо освободить данное подразделение от дочерних!`);
          return;
        }
        this.divisionsService.apiDivisionsIdDelete({id: this.sidebarService.dataSourceItem$.value[0].division.id } )
          .subscribe(() => {
            showSuccess(`Подразделение ${this.sidebarService.dataSourceItem$.value[0].division.title} успешно удалено!`);
            this.entityDataContext.divisions.removeOneFromCache(this.sidebarService.dataSourceItem$.value[0].division);
          }, error => {
            this.errorHandler.handle(error);
          });
      }
    },
    {
      id: 5,
      title: 'Переместить оборудование',
      click: () => {
        if (this.authService.currentUser.account.role === Role.User) {
          showWarning('Данная операция доступна для Администратора.');
          return;
        }
        if (this.sidebarService.dataSourceItem$.value === undefined || this.sidebarService.dataSourceItem$.value.length === 0) {
          showWarning('Необходимо выделить подразделение в таблице');
          return;
        }
        this.actionId = 3;
        this.showPopupDivisions();
      }
    },
    {
      id: 6,
      title: 'Переместить подразделение',
      click: () => {
        if (this.authService.currentUser.account.role === Role.User) {
          showWarning('Данная операция доступна для Администратора.');
          return;
        }
        if (this.sidebarService.dataSourceItem$.value === undefined || this.sidebarService.dataSourceItem$.value.length === 0) {
          showWarning('Необходимо выделить подразделение в таблице');
          return;
        }
        this.actionId = 4;
        this.showPopupDivisions();
      }
    }
  ];

  popupEquipmentMove = false;
  divisions: Division[];
  popupDivisionForm = false;

  constructor(
    private sidebarService: DivisionsPageSidebarService,
    private navigator: NavigatorService,
    private entityDataContext: EntityDataContext,
    private divisionsService: DivisionsService,
    private equipmentsService: EquipmentsService,
    private divisionsBatchService: DivisionsBatchService,
    private equipmentsBatchService: EquipmentsBatchService,
    private errorHandler: ErrorHandlerService,
    private loadingService: LoadingService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  selectItem(e: {itemData: Division}): void {
    this.selectedDivision = e.itemData;
  }

  ngOnDestroy(): void {
  }

  equipmentsMoveClick(): void {
    switch (this.actionId) {
      case 3: {
        this.runEquipmentsMove();
        return;
      }
      case 4: {
        this.runDivisionMove();
        return;
      }
      default:
        throw new Error(`Не поддерживаемый тип операции: ${this.actionId}`);
    }
  }

  private showPopupDivisions(): void {
    this.entityDataContext.divisions.getListLazy()
      .pipe(
        take(1),
        untilDestroyed(this)
      )
      .subscribe(divisions => {
        this.divisions = divisions.map(x => {
          const item: Division & { expanded: boolean } = {...x, expanded: true};
          return item;
        });
        this.popupEquipmentMove = true;
      }, error => {
        this.errorHandler.handle(error);
      });
  }

  private runDivisionMove(): void {
    this.loadingService.show();
    const divisionIds = this.sidebarService.dataSourceItem$.value.map(x => x.division.id);
    this.divisionsBatchService.apiDivisionsBatchMovePost({divisionId: this.selectedDivision.id, body: divisionIds})
      .subscribe(() => {
        this.sidebarService.dataSourceItem$.value.map(x => x.division).forEach(x => {
          const division = {...x};
          division.parentId = this.selectedDivision.id;
          this.entityDataContext.divisions.upsertOneInCache(division);
        });
        showSuccess(`Перемещение в подразделение ${this.selectedDivision.title} выполнено успешно!`);
        this.popupEquipmentMove = false;
        this.loadingService.hide();
      }, error => {
        this.loadingService.hide();
        this.errorHandler.handle(error);
      });
  }

  private runEquipmentsMove(): void {
    this.loadingService.show();
    this.entityDataContext.equipments.getListLazy()
      .pipe(
        take(1),
        untilDestroyed(this))
      .subscribe(async (equipments) => {
        const divisionIds = this.sidebarService.dataSourceItem$.value.map(x => x.division.id);
        equipments = equipments.filter(x => divisionIds.includes(x.divisionId));
        this.equipmentsBatchService.apiEquipmentsBatchMovePost({divisionId: this.selectedDivision.id, body: equipments.map(x => x.id)})
          .subscribe(() => {
            equipments.forEach(equipment => {
              equipment = {...equipment};
              equipment.divisionId = this.selectedDivision.id;
              this.entityDataContext.equipments.upsertOneInCache(equipment);
            });
            this.sidebarService.dataSourceItem$.value.forEach(item => item.equipmentCount = 0);
            showSuccess(`Перемещение оборудования в подразделение ${this.selectedDivision.title} выполнено успешно!`);
            this.popupEquipmentMove = false;
            this.loadingService.hide();
          }, error => {
            this.errorHandler.handle(error);
            this.loadingService.hide();
          });
      });
  }

  saveDivisionClick(): void {
    this.loadingService.show();
    if (this.selectedDivision.id) {
      this.divisionsService.apiDivisionsIdPut({id: this.selectedDivision.id, body: this.selectedDivision})
        .subscribe(() => {
          showSuccess(`Подразделение ${this.selectedDivision.title} успешно обновлено!`);
          this.entityDataContext.divisions.updateOneInCache(this.selectedDivision);
          this.popupDivisionForm = false;
          this.loadingService.hide();
        }, error => {
          this.errorHandler.handle(error);
          this.loadingService.hide();
        });
    } else {
      this.divisionsService.apiDivisionsPost$Json({body: this.selectedDivision})
        .subscribe(division => {
          showSuccess(`Подразделение ${division.title} успешно создано!`);
          this.entityDataContext.divisions.addOneToCache(division);
          this.popupDivisionForm = false;
          this.loadingService.hide();
        }, error => {
          this.errorHandler.handle(error);
          this.loadingService.hide();
        });
    }
  }
}
