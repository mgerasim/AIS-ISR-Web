import {Component, Input, OnInit} from '@angular/core';
import {PermissionService} from '../../../core/services/permission.service';
import {Account} from '../../../api/models/account';
import {showSuccess} from '../../../shared/utils/message-utils';
import {ErrorHandlerService} from '../../../core/errors/error-handler.service';
import {AccountsService} from '../../../api/services/accounts.service';
import {AuthService} from '../../../auth/auth.service';
import {Role} from '../../../api/models/role';
import {RoletToInt} from '../../../shared/utils/role-utils';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  @Input() account: Account;

  roles = this.permissionService.roles;
  isUser: boolean;

  get disabled(): boolean {
    return RoletToInt(this.account.role) > RoletToInt(this.authService.currentUser.account.role);
  }

  constructor(
    private permissionService: PermissionService,
    private errorHandlerService: ErrorHandlerService,
    private accountsService: AccountsService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  onRoleChanged(account: Account): void {
    this.accountsService.apiAccountsIdPut({id: account.id, body: account}).subscribe(() => {
      showSuccess(`Роль пользователя успешна изменена`);
    }, error => this.errorHandlerService.handle(error));
  }
}
