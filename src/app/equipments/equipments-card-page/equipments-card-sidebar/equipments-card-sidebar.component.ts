import {Component, Input, OnInit} from '@angular/core';
import {NavigatorService} from '../../../core/routing/navigator.service';
import {Equipment} from '../../../api/models/equipment';
import {showWarning} from '../../../shared/utils/message-utils';
import {CorrectiveAction} from '../../../api/models/corrective-action';
import {CorrectiveActionStatus} from '../../../api/models/corrective-action-status';
import {AuthService} from '../../../auth/auth.service';

@Component({
  selector: 'app-equipments-card-sidebar',
  templateUrl: './equipments-card-sidebar.component.html',
  styleUrls: ['./equipments-card-sidebar.component.scss']
})
export class EquipmentsCardSidebarComponent implements OnInit {

  @Input() equipment: Equipment;

  public menu: any[];
  correctiveAction: CorrectiveAction;
  popupVisible = false;

  constructor(
    private navigator: NavigatorService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.menu = [
      {
        id: 1,
        icon: '',
        title: 'Редактировать оборудование',
        click: () => {
          this.navigator.toEquipmentEdit(this.equipment.id);
        }
      }, {
        id: 2,
        icon: '',
        title: (this.equipment.examination ? 'Редактировать ' : 'Добавить ') + 'экспертизу',
        click: () => {
          this.navigator.toEquipmentExamination(this.equipment.id);
        }
      },
      {
        id: 3,
        icon: '',
        title: 'Добавить корректирующее мероприятие',
        click: () => {
          this.correctiveAction = {
            equipmentId: this.equipment.id,
            performerId: this.authService.currentUser.id,
            status: CorrectiveActionStatus.InWork
          } as CorrectiveAction;
          this.popupVisible = true;
        }
      },
      {
        id: 4,
        icon: '/assets/document-history.png',
        title: 'История изменений',
        click: () => {
          this.navigator.toEquipmentHistory(this.equipment.id);
        }
      },
    ];
  }

  saveCorrectiveAction(): void {
    this.popupVisible = false;
  }
}
