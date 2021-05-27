import { Injectable } from '@angular/core';
import {Role} from '../../api/models/role';
import {AuthService} from '../../auth/auth.service';
import {CorrectiveActionStatus} from '../../api/models/corrective-action-status';
import {Account} from '../../api/models/account';

type RolesType = {
  id: Role,
  title: string,
  disabled: boolean,
};

type StatusesType = {
  id: CorrectiveActionStatus,
  title: string,
  disabled: boolean,
};

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(
    private authService: AuthService) { }

    get statuses(): StatusesType[] {
      const statuses = [
        {
          id: CorrectiveActionStatus.None,
          title: 'Создано',
          disabled: false
        },
        {
          id: CorrectiveActionStatus.InWork,
          title: 'В работе',
          disabled: false
        },
        {
          id: CorrectiveActionStatus.Completed,
          title: 'Выполнено',
          disabled: this.authService.currentUser.account.role !== Role.User && this.authService.currentUser.account.role !== Role.SuperAdmin
        },
        {
          id: CorrectiveActionStatus.Confirmed,
          title: 'Подтверждено',
          disabled: this.authService.currentUser.account.role !== Role.Admin && this.authService.currentUser.account.role !== Role.SuperAdmin
        }
      ];
      return statuses;
    }

    get isSuperAdmin(): boolean {
      return this.authService.currentUser.account.role === Role.SuperAdmin;
    }

    get isUser(): boolean {
      return this.authService.currentUser.account.role === Role.User;
    }

    get roles(): RolesType[] {
      const roles = new Array<RolesType>();
      roles.push(
        {
          id: Role.User,
          title: 'Пользователь',
          disabled: false,
        },
      );

      roles.push(
        {
          id: Role.Admin,
          title: 'Администратор',
          disabled: !(this.authService.currentUser.account.role === Role.Admin || this.authService.currentUser.account.role === Role.SuperAdmin)
        },
      );

      roles.push(
        {
          id: Role.SuperAdmin,
          title: 'Супер Администратор',
          disabled: this.authService.currentUser.account.role !== Role.SuperAdmin
        }
      );

      return roles;
    }
}
