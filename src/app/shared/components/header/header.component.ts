import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../../auth/auth.service';
import {User} from '../../../api/models/user';
import {UserNotificationsService} from '../../../api/services/user-notifications.service';
import {ErrorHandlerService} from '../../../core/errors/error-handler.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {ServerNotificationsService} from '../../../core/server-notifications/server-notifications.service';
import {SubscribeOperation} from '../../../api/models/subscribe-operation';
import {Role} from '../../../api/models/role';

@UntilDestroy()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  notificationCount?: number = undefined;

  incidentCount?: number = undefined;

  public get currentUser(): User {
    return this.authService.currentUser;
  }

  public get isSuperAdmin(): boolean {
    return  this.currentUser.account.role === Role.SuperAdmin;
  }

  constructor(
    private authService: AuthService,
    private userNotificationsService: UserNotificationsService,
    private serverNotificationsService: ServerNotificationsService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit(): void {
    console.log('subscribe Incident Count');
    this.serverNotificationsService.subscribe<number>(SubscribeOperation.IncidentCount)
      .pipe(untilDestroyed(this))
      .subscribe(count => {
        console.log(count);
        this.incidentCount = count;
      }, error => {
        this.errorHandler.handle(error);
      });

    this.serverNotificationsService.subscribe<number>(SubscribeOperation.NotificationCount)
      .pipe(untilDestroyed(this))
      .subscribe(count => {
        this.notificationCount = count;
      }, error => {
        this.errorHandler.handle(error);
      });
  }

  ngOnDestroy(): void {
  }

}
