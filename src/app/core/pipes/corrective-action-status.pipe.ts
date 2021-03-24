import {Pipe, PipeTransform} from '@angular/core';
import {CorrectiveActionStatus} from '../../api/models/corrective-action-status';

@Pipe({
  name: 'correctiveActionStatus'
})
export class CorrectiveActionStatusPipe implements PipeTransform {

  transform(value: CorrectiveActionStatus, ...args: unknown[]): unknown {
    if (value === null || value === undefined) {
      return '';
    }

    switch (value) {
      case CorrectiveActionStatus.None:
        return 'Создано';
      case CorrectiveActionStatus.InWork:
        return 'В работе';
      case CorrectiveActionStatus.Completed:
        return 'Выполнено';
      case CorrectiveActionStatus.Confirmed:
        return 'Подтверждено';
      default:
        throw new Error(`Не поддерживаемый статус экспертизы: ${value}`);
    }
  }

}
