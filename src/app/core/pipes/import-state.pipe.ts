import {Pipe, PipeTransform} from '@angular/core';
import {ImportProcessorState} from '../../api/models/import-processor-state';

@Pipe({
  name: 'importState'
})
export class ImportStatePipe implements PipeTransform {

  transform(value: ImportProcessorState): string {
    switch (value) {
      case ImportProcessorState.None:
        return 'Не установлен';
      case ImportProcessorState.Starting:
        return 'Запускает';
      case ImportProcessorState.Started:
        return 'Импортирует';
      case ImportProcessorState.Finished:
        return 'Выполнен';
      default:
        throw new Error(`Не известный тип процесса импорта: ${ImportProcessorState}`);
    }
  }

}
