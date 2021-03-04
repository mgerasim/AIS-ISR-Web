import {Component, Input, OnInit} from '@angular/core';
import {Examination} from '../../api/models/examination';
import {ExaminationStatus} from '../../api/models/examination-status';
import {ErrorHandlerService} from '../../core/errors/error-handler.service';
import {ExaminationsService} from '../../api/services/examinations.service';
import {showSuccess} from '../../shared/utils/message-utils';
import {EntityDataContext} from '../../core/entity/entity-data-context.service';
import {NavigatorService} from '../../core/routing/navigator.service';

@Component({
  selector: 'app-examination-form',
  templateUrl: './examination-form.component.html',
  styleUrls: ['./examination-form.component.scss']
})
export class ExaminationFormComponent implements OnInit {

  @Input() examination: Examination;

  examinationStatusDataSource: Array<{id: ExaminationStatus, title: string}> = [
    {
      id: ExaminationStatus.Corresponds,
      title: 'Соответствует требованиям'
    },
    {
      id: ExaminationStatus.NonCorresponds,
      title: 'Не соответствует требованиям'
    }
  ];


  constructor(
    private errorHandler: ErrorHandlerService,
    private examinationsService: ExaminationsService,
    private entityDataContext: EntityDataContext,
    private navigator: NavigatorService
  ) { }

  ngOnInit(): void {
  }

  async save(): Promise<void> {
    try {
      if (this.examination.id) {
        await this.examinationsService.apiExaminationsIdPut({id: this.examination.id, body: this.examination}).toPromise();
        showSuccess(`Экспертиза успешна обновлена`);
        this.entityDataContext.examinations.updateOneInCache(this.examination);
        this.navigator.toEquipment(this.examination.equipmentId);
      } else {
        this.examination = await this.examinationsService.apiExaminationsPost$Json({body: this.examination}).toPromise();
        showSuccess(`Экспертиза успешна добавлена`);
        this.entityDataContext.examinations.addOneToCache(this.examination);
        const model = await this.entityDataContext.equipments.getByIdLazy(this.examination.id).toPromise();
        const equipment = {...model};
        equipment.examinationId = this.examination.id;
        this.entityDataContext.equipments.updateOneInCache(equipment);
        this.navigator.toEquipment(this.examination.equipmentId);
      }
    }
    catch (e) {
      this.errorHandler.handle(e);
    }
  }
}
