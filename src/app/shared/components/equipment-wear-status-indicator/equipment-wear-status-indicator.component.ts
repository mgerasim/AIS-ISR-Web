import {Component, Input, OnInit} from '@angular/core';
import {Equipment} from '../../../api/models/equipment';
import {Settings} from '../../../api/models/settings';

@Component({
  selector: 'app-equipment-wear-status-indicator',
  templateUrl: './equipment-wear-status-indicator.component.html',
  styleUrls: ['./equipment-wear-status-indicator.component.scss']
})
export class EquipmentWearStatusIndicatorComponent implements OnInit {

  @Input() equipment: Equipment;

  @Input() settings: Settings;

  @Input() warningPercent: number;

  @Input() criticalPercent: number;

  get isCritical(): boolean {
    return this.equipment.wearPercentage >= this.criticalPercent;
  }

  get isWarning(): boolean {
    return this.warningPercent <= this.equipment.wearPercentage && this.equipment.wearPercentage < this.criticalPercent
  }

  constructor() { }

  ngOnInit(): void {
  }

}
