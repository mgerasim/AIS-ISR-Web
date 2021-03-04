import {Component, OnDestroy, OnInit} from '@angular/core';
import {shareEntityId} from '../../shared/utils/routing-utils';
import {ActivatedRoute} from '@angular/router';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {ErrorHandlerService} from '../../core/errors/error-handler.service';
import {Equipment} from '../../api/models/equipment';
import {EntityDataContext} from '../../core/entity/entity-data-context.service';
import {TitleService} from '../../core/services/title.service';

@UntilDestroy()
@Component({
  selector: 'app-equipments-card-page',
  templateUrl: './equipments-card-page.component.html',
  styleUrls: ['./equipments-card-page.component.scss']
})
export class EquipmentsCardPageComponent implements OnInit, OnDestroy{

  equipment: Equipment;

  entityId = this.route.params.pipe(shareEntityId());

  constructor(
    private route: ActivatedRoute,
    private entityDataContext: EntityDataContext,
    private errorHandler: ErrorHandlerService,
    private titleService: TitleService
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Карточка оборудования');
    this.entityId
      .pipe(
        untilDestroyed(this)
      )
      .subscribe(
        id => {
          this.entityDataContext.equipments.getByIdLazy(id).subscribe(equipment => {
            console.log(equipment);
            this.equipment = equipment;
          }, error => this.errorHandler.handle(error));
        },
        error => this.errorHandler.handle(error)
      );
  }

  ngOnDestroy(): void {
  }

}
