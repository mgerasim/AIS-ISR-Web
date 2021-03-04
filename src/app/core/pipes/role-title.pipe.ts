import {Pipe, PipeTransform} from '@angular/core';
import {Role} from '../../api/models/role';

@Pipe({
  name: 'roleTitle'
})
export class RoleTitlePipe implements PipeTransform {

  transform(value: Role, ...args: unknown[]): unknown {
    if (value === null || value === undefined) {
      return '';
    }

    switch (value) {
      case Role.Admin:
        return 'Администратор';
      case Role.User:
        return 'Пользователь';
      default:
        throw new Error(`Не поддерживаемая роль сотрудника: ${value}`);
    }
  }

}
