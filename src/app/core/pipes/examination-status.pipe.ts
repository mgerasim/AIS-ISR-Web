import {Pipe, PipeTransform} from '@angular/core';
import {ExaminationStatus} from '../../api/models/examination-status';

@Pipe({
  name: 'examinationStatus'
})
export class ExaminationStatusPipe implements PipeTransform {

  transform(value: ExaminationStatus, ...args: unknown[]): unknown {
    if (value === null || value === undefined) {
      return '';
    }

    switch (value) {
      case ExaminationStatus.Corresponds:
        return 'Соответствует требованиям';
      case ExaminationStatus.NonCorresponds:
        return 'Не соответсвует требованиям';
      default:
        throw new Error(`Не поддерживаемый статус экспертизы: ${value}`);
    }
  }

}
