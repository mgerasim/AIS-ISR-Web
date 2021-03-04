import {Component, Input, OnInit} from '@angular/core';
import {NavigatorService} from '../../../core/routing/navigator.service';
import {Equipment} from '../../../api/models/equipment';
import {showWarning} from '../../../shared/utils/message-utils';
import {CorrectiveAction} from '../../../api/models/corrective-action';

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
        title: (this.equipment.examinationId ? 'Редактировать ' : 'Добавить ') + 'экспертизу',
        click: () => {
          this.navigator.toEquipmentExamination(this.equipment.id);
        }
      },
      {
        id: 3,
        icon: '',
        title: 'Добавить корректирующее мероприятие',
        click: () => {
          this.correctiveAction = { equipmentId: this.equipment.id } as CorrectiveAction;
          this.popupVisible = true;
        }
      },
    ];
  }

  saveCorrectiveAction(): void {
    this.popupVisible = false;
  }
}
