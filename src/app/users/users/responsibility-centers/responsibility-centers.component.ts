import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../../api/models/user';
import {ResponsibilityCenter} from '../../../api/models/responsibility-center';
import {EntityDataContext} from '../../../core/entity/entity-data-context.service';
import {ErrorHandlerService} from '../../../core/errors/error-handler.service';
import {combineLatest} from 'rxjs';
import {showSuccess} from '../../../shared/utils/message-utils';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {UsersService} from '../../../api/services/users.service';

@UntilDestroy()
@Component({
  selector: 'app-responsibility-centers',
  templateUrl: './responsibility-centers.component.html',
  styleUrls: ['./responsibility-centers.component.css']
})
export class ResponsibilityCentersComponent implements OnInit, OnDestroy {

  @Input() user: User;
  @Input() responsibilityCenters: ResponsibilityCenter[];

  userResponsibilityCenters = new Array<ResponsibilityCenter>();

  constructor(
    private usersService: UsersService,
    private entityDataContext: EntityDataContext,
    private errorHandlerService: ErrorHandlerService
  ) { }

  ngOnInit(): void {
    combineLatest([
      this.entityDataContext.userResponsibilityCenters.getListLazy(),
    ]).pipe(untilDestroyed(this)).subscribe(([userResponsibilityCenters]) => {
      const userResponsibilityCenterIds = userResponsibilityCenters.filter(x => x.userId === this.user.id).map(x => x.responsibilityCenterId);
      this.userResponsibilityCenters = this.responsibilityCenters.filter(x => userResponsibilityCenterIds.includes(x.id));
    }, error => {
      this.errorHandlerService.handle(error);
    });
  }

  responsibilityCentersChanged(): void {
    this.usersService.apiUsersResponsibilityCenterIdPut$Json({id: this.user.id, body: this.userResponsibilityCenters}).subscribe(() => {
      showSuccess(`Принадлежность к центрам ответсвенности успешно обновлено для пользоватлея ${this.user.displayName}`);
    }, error => this.errorHandlerService.handle(error));
  }

  ngOnDestroy(): void {
  }

}
