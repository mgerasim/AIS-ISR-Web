import {Component, OnDestroy, OnInit} from '@angular/core';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import { toDate } from 'src/app/shared/utils/date-utils';
import {Incident} from '../../api/models/incident';
import {EntityDataContext} from '../../core/entity/entity-data-context.service';
import {ErrorHandlerService} from '../../core/errors/error-handler.service';
import {TitleService} from '../../core/services/title.service';
import {Equipment} from '../../api/models/equipment';
import {combineLatest} from 'rxjs';
import {ResponsibilityCenter} from '../../api/models/responsibility-center';
import {Division} from '../../api/models/division';

type DataSourceItem = {
  incident: Incident,
  equipment?: Equipment,
  responsibilityCenter?: ResponsibilityCenter,
  division?: Division,
};

@UntilDestroy()
@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.scss']
})
export class IncidentsComponent implements OnInit, OnDestroy {

  dataSource: DataSourceItem[];
  selectedRowKeys: DataSourceItem[];
  equipment: Equipment;
  popupVisible: boolean;

  constructor(
    private entityDataContext: EntityDataContext,
    private errorHandlerService: ErrorHandlerService,
    private titleService: TitleService
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Нешатные ситуации');
    combineLatest([
      this.entityDataContext.incidents.getListLazy(),
      this.entityDataContext.equipments.getListLazy(),
      this.entityDataContext.divisions.getListLazy(),
      this.entityDataContext.responsibilityCenters.getListLazy(),
        ])
      .pipe(untilDestroyed(this))
      .subscribe(([incidents, equipments, divisions, responsibilityCenters]) => {
        this.dataSource = incidents.filter(incident => !incident.isClosed).map(incident => {
          const equipment = equipments.find(x => x.id === incident.equipmentId);
          const division = divisions.find(x => x.id === equipment?.divisionId);
          const responsibilityCenter = responsibilityCenters.find(x => x.id === equipment?.responsibilityCenterId);
          const item: DataSourceItem = {
            incident,
            equipment,
            division,
            responsibilityCenter
          };
          return item;
        });
      }, error => this.errorHandlerService.handle(error));
  }

  ngOnDestroy(): void {
  }

  onCellDblClick(e: any): void {
    console.log(e.data);
    this.equipment = e.data.equipment;
    this.popupVisible = true;
  }

  onSelectionChanged($event: any): void {

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

  toDate(str): Date {
    return toDate(str);
  }
}
