import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../auth/auth.service';
import {User} from '../../../api/models/user';
import {UserNotificationsService} from '../../../api/services/user-notifications.service';
import {ErrorHandlerService} from '../../../core/errors/error-handler.service';
import {IncidentCountChangedNotificationsService} from '../../../core/server-notifications/incident-count-changed-notifications.service';
import {IncidentCountChangedSubscriberService} from '../../../core/server-notifications/incident-count-changed-subscriber.service';
import {NotificationCountChangedSubscriberService} from '../../../core/server-notifications/notification-count-changed-subscriber.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  notificationCount?: number = undefined;

  incidentCount?: number = undefined;

  public get currentUser(): User {
    return this.authService.currentUser;
  }

  constructor(
    private authService: AuthService,
    private userNotificationsService: UserNotificationsService,
    private notificationCountChangedSubscriberService: NotificationCountChangedSubscriberService,
    private incidentCountChangedSubscriberService: IncidentCountChangedSubscriberService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.incidentCountChangedSubscriberService.subscribeInitializeAndSetEmptySubs().then( () => {
      this.incidentCountChangedSubscriberService.subscribeAndAddEntityChangedHandler().subscribe(count => {
        console.log(count);
        this.incidentCount = count;
      }, error => {
        this.errorHandler.handle(error);
      });
    }).catch(error => {
      this.errorHandler.handle(error);
    });

    this.notificationCountChangedSubscriberService.subscribeInitializeAndSetEmptySubs().then( () => {
      this.notificationCountChangedSubscriberService.subscribeAndAddEntityChangedHandler().subscribe( count => {
        console.log(count);
        this.notificationCount = count;
      }, error => {
        this.errorHandler.handle(error);
      });
    }).catch(error => {
      this.errorHandler.handle(error);
    });
  }

}
