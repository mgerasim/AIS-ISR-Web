import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigatorService} from '../../../core/routing/navigator.service';
import {SidebarService} from '../../sidebar.service';
import {UntilDestroy} from '@ngneat/until-destroy';
import {showError, showWarning} from '../../../shared/utils/message-utils';
import {CorrectiveAction} from '../../../api/models/corrective-action';

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
      id: 5,
      icon: '/assets/action.png',
      title: 'Добавить корректирующее мероприятие',
      click: () => {
        if (this.sidebarService.equipment$.value === undefined) {
          showWarning('Необходимо выделить оборудование в таблице');
          return;
        }
        this.correctiveAction = { equipmentId: this.sidebarService.equipment$.value.id } as CorrectiveAction;
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
    private sidebarService: SidebarService
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  saveCorrectiveAction(): void {
    this.popupVisible = false;
  }
}
