import {Component, OnDestroy, OnInit} from '@angular/core';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {EntityDataContext} from '../../../core/entity/entity-data-context.service';
import {ErrorHandlerService} from '../../../core/errors/error-handler.service';
import {UserNotification} from '../../../api/models/user-notification';
import {Notification} from '../../../api/models/notification';
import {combineLatest} from 'rxjs';
import { toDate } from 'src/app/shared/utils/date-utils';
import {UserNotificationsService} from '../../../api/services/user-notifications.service';
import {NotificationsPageSidebarService} from '../notifications-page-sidebar.service';
import {NavigatorService} from '../../../core/routing/navigator.service';

type DataSourceItem = {
  userNotification: UserNotification,
  notification: Notification
};

@UntilDestroy()
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit, OnDestroy {

  dataSource: DataSourceItem[];
  selectedRowKeys: DataSourceItem[];

  constructor(
    private entityDataContext: EntityDataContext,
    private errorHandler: ErrorHandlerService,
    private userNotificationsService: UserNotificationsService,
    private notificationsPageSidebarService: NotificationsPageSidebarService,
    private navigator: NavigatorService
  ) { }

  ngOnInit(): void {
    combineLatest([
      this.entityDataContext.userNotifications.getListLazy(),
      this.entityDataContext.notifications.getListLazy()
    ]).pipe(untilDestroyed(this)).subscribe(([userNotifications, notifications]) => {
      this.dataSource = userNotifications.map(userNotification => {
        const notification = notifications.find(x => x.id === userNotification.notificationId);
        if (notification === undefined) {
          throw new Error(`Не найдено уведомление по идентификатору ${userNotification.notificationId}`);
        }
        const item: DataSourceItem = {
          notification,
          userNotification
        };
        return item;
      });
      if (this.dataSource.length > 0) {
        this.selectedRowKeys = [
          this.dataSource[0]
        ];
      };
    }, error => this.errorHandler.handle(error));
  }

  toDate(str): Date {
    return toDate(str);
  }

  onCellDblClick($event: { data: DataSourceItem }): void {
    const notification = {...$event.data.userNotification};
    notification.isRead = true;
    this.userNotificationsService.apiUserNotificationsIdPut({id: notification.id, body: notification})
      .subscribe(() => {
        this.entityDataContext.userNotifications.updateOneInCache(notification);
        this.navigator.toNotification(notification.id);
      }, error => {
        this.errorHandler.handle(error);
      });
  }

  onSelectionChanged(e: {selectedRowsData: DataSourceItem[]}): void {
    this.notificationsPageSidebarService.userNotification$.next(e.selectedRowsData[0].userNotification);
  }

  onToolbarPreparing(e: any): void {
    for (const item of e.toolbarOptions.items) {
      item.location = 'after';
      item.showText = '';
    }
    e.toolbarOptions.items.push({
      location: 'center',
      template: 'titleTemplate',
    });
  }

  ngOnDestroy(): void {
  }
}
