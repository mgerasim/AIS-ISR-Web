import {Component, ErrorHandler, OnInit} from '@angular/core';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {map, switchMap, tap} from 'rxjs/operators';
import {shareEntityId} from '../../shared/utils/routing-utils';
import {ActivatedRoute} from '@angular/router';
import {EntityDataContext} from '../../core/entity/entity-data-context.service';
import {Equipment} from '../../api/models/equipment';
import {ErrorHandlerService} from '../../core/errors/error-handler.service';
import {Examination} from '../../api/models/examination';
import {of} from 'rxjs';
import {TitleService} from '../../core/services/title.service';

@UntilDestroy()
@Component({
  selector: 'app-examination',
  templateUrl: './examination.component.html',
  styleUrls: ['./examination.component.scss']
})
export class ExaminationComponent implements OnInit {

  entityId = this.route.params.pipe(shareEntityId());

  equipment: Equipment;

  examination: Examination;

  constructor(
    private route: ActivatedRoute,
    private entityDataContext: EntityDataContext,
    private errorHandler: ErrorHandlerService,
    private titleService: TitleService
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Экспертиза');
    this.entityId
      .pipe(
        untilDestroyed(this),
        switchMap((id: number) => this.entityDataContext.equipments.getByIdLazy(id)),
        tap(equipment => this.equipment = {...equipment}),
        switchMap(equipment => {
          if (equipment.examination) {
            return this.entityDataContext.examinations.getByIdLazy(equipment.examination.id);
          } else {
            const examination = {
              equipmentId: equipment.id
            } as Examination;
            return of(examination);
          }
        })
      )
      .subscribe(
        examination => {
          this.examination = {...examination};
        },
        error => this.errorHandler.handle(error)
      );
  }

}
