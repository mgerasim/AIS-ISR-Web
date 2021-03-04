import { Component, OnInit } from '@angular/core';
import {Equipment} from '../../api/models/equipment';

@Component({
  selector: 'app-equipments-add',
  templateUrl: './equipments-add.component.html',
  styleUrls: ['./equipments-add.component.scss']
})
export class EquipmentsAddComponent implements OnInit {

  equipment = {} as Equipment;

  constructor() { }

  ngOnInit(): void {

  }

}
