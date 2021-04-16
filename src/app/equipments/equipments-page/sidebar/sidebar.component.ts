import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigatorService} from '../../../core/routing/navigator.service';
import {SidebarService} from '../../sidebar.service';
import {UntilDestroy} from '@ngneat/until-destroy';
import {showSuccess, showWarning} from '../../../shared/utils/message-utils';
import {CorrectiveAction} from '../../../api/models/corrective-action';
import {AuthService} from '../../../auth/auth.service';
import {CorrectiveActionStatus} from '../../../api/models/corrective-action-status';
import {showConfirmation} from '../../../shared/utils/dialog-utils';
import {DialogService} from '@progress/kendo-angular-dialog';
import {ErrorHandlerService} from '../../../core/errors/error-handler.service';
import {EquipmentsService} from '../../../api/services/equipments.service';
import {EntityDataContext} from '../../../core/entity/entity-data-context.service';

@UntilDestroy()
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  public menu: any[] = [
    {
      id: 1,
      icon: '/assets/document.png',
      title: 'Карточка',
      click: () => {
        if (this.sidebarService.equipment$.value === undefined) {
          showWarning('Необходимо выделить оборудование в таблице');
          return;
        }
        this.navigator.toEquipment(this.sidebarService.equipment$.value.id);
      }
    },
    {
      id: 2,
      icon: '/assets/document-add.png',
      title: 'Добавить оборудование',
      click: () => {
        this.navigator.toEquipmentAdd();
      }
    },
    {
      id: 3,
      icon: '/assets/document-edit-flat.png',
      title: 'Редактировать оборудование',
      click: () => {
        if (this.sidebarService.equipment$.value === undefined) {
          showWarning('Необходимо выделить оборудование в таблице');
          return;
        }
        this.navigator.toEquipmentEdit(this.sidebarService.equipment$.value.id);
      }
    },
    {
      id: 6,
      icon: '/assets/document-remove-icon.png',
      title: 'Удалить оборудование',
      click: () => {
        if (this.sidebarService.equipment$.value === undefined) {
          showWarning('Необходимо выделить оборудование в таблице');
          return;
        }
        const equipment = this.sidebarService.equipment$.value;
        const content = `Удалить оборудование ${equipment.title} с кодом ${equipment.code} ?`;
        showConfirmation(this.dialogService, content).subscribe(result => {
          if (result === false) {
            return;
          }
          this.equipmentsService.apiEquipmentsIdDelete$Json({id: equipment.id}).subscribe(
            () => {
              showSuccess(`Оборудоание ${equipment.title} успешно удалено!`);
              this.entityDataContext.equipments.removeOneFromCache(equipment);
            }
          );
        }, error => {
          this.errorHandle.handle(error);
        });
      }
    },
    {
      id: 5,
      icon: '/assets/action.png',
      title: 'Добавить корректирующее мероприятие',
      click: () => {
        if (this.sidebarService.equipment$.value === undefined) {
          showWarning('Необходимо выделить оборудование в таблице');
          return;
        }
        this.correctiveAction = {
          equipmentId: this.sidebarService.equipment$.value.id,
          performerId: this.authService.currentUser.id,
          status: CorrectiveActionStatus.InWork
        } as CorrectiveAction;
        this.popupVisible = true;
      }
    },
    {
      id: 4,
      icon: '/assets/import.ico',
      title: 'Импорт',
      click: () => {
        this.navigator.toImport();
      }
    }
  ];
  correctiveAction: CorrectiveAction;
  popupVisible = false;

  constructor(
    private navigator: NavigatorService,
    private sidebarService: SidebarService,
    private authService: AuthService,
    private dialogService: DialogService,
    private errorHandle: ErrorHandlerService,
    private equipmentsService: EquipmentsService,
    private entityDataContext: EntityDataContext,
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  saveCorrectiveAction(): void {
    this.popupVisible = false;
  }
}
