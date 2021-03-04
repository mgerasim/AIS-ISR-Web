import { Component, OnInit } from '@angular/core';
import {showSuccess, showWarning} from '../../../shared/utils/message-utils';
import {NavigatorService} from '../../../core/routing/navigator.service';
import {NotificationsPageSidebarService} from '../notifications-page-sidebar.service';
import {NotificationsService} from '../../../api/services/notifications.service';
import {ErrorHandlerService} from '../../../core/errors/error-handler.service';
import {EntityDataContext} from '../../../core/entity/entity-data-context.service';
import {UserNotificationsService} from '../../../api/services/user-notifications.service';

@Component({
  selector: 'app-notifications-sidebar',
  templateUrl: './notifications-sidebar.component.html',
  styleUrls: ['./notifications-sidebar.component.scss']
})
export class NotificationsSidebarComponent implements OnInit {

  public menu: any[] = [
    {
      id: 1,
      title: 'Просмотр',
      click: () => {
        if (this.notificationsPageSidebarService.userNotification$.value === undefined) {
          showWarning('Необходимо выделить уведомление в таблице');
          return;
        }
        const notification = {...this.notificationsPageSidebarService.userNotification$.value};
        notification.isRead = true;
        this.userNotificationsService.apiUserNotificationsIdPut({id: notification.id, body: notification})
          .subscribe(() => {
            this.entityDataContext.userNotifications.updateOneInCache(notification);
            this.navigator.toNotification(notification.id);
          }, error => {
            this.errorHandlerService.handle(error);
          });
      }
    },
    {
      id: 2,
      title: 'Удалить',
      click: () => {
        if (this.notificationsPageSidebarService.userNotification$.value === undefined) {
          showWarning('Необходимо выделить уведомление в таблице');
          return;
        }
        this.userNotificationsService.apiUserNotificationsIdDelete({
          id: this.notificationsPageSidebarService.userNotification$.value.id
        }).subscribe(() => {
          showSuccess('Уведомление успешно удалено');
          this.entityDataContext.userNotifications.removeOneFromCache(this.notificationsPageSidebarService.userNotification$.value);
        }, error => this.errorHandlerService.handle(error));
      }
    },
    {
      id: 3,
      title: 'Прочитать все',
      click: () => {
        this.userNotificationsService.apiUserNotificationsReadAllPut().subscribe(() => {
          showSuccess('Все уведомления установлены как прочитанные!');
        }, error => this.errorHandlerService.handle(error));
      }
    },
    {
      id: 4,
      title: 'Удалить все',
      click: () => {
        this.userNotificationsService.apiUserNotificationsDeleteAllDelete().subscribe(() => {
          showSuccess('Все уведомления удалены!');
        }, error => this.errorHandlerService.handle(error));
      }
    }
  ];

  constructor(
    private navigator: NavigatorService,
    private notificationsPageSidebarService: NotificationsPageSidebarService,
    private userNotificationsService: UserNotificationsService,
    private errorHandlerService: ErrorHandlerService,
    private entityDataContext: EntityDataContext
  ) { }

  ngOnInit(): void {

  }

}
