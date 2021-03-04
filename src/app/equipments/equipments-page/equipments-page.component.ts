import { Component, OnInit } from '@angular/core';
import {TitleService} from '../../core/services/title.service';

@Component({
  selector: 'app-equipments-page',
  templateUrl: './equipments-page.component.html',
  styleUrls: ['./equipments-page.component.scss']
})
export class EquipmentsPageComponent implements OnInit {

  constructor(
    private titleService: TitleService
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Оборудование');
  }
}
