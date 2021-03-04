import { Component, OnInit } from '@angular/core';
import {EntityDataContext} from '../../core/entity/entity-data-context.service';
import {ErrorHandlerService} from '../../core/errors/error-handler.service';
import {shareEntityId} from '../../shared/utils/routing-utils';
import {ActivatedRoute} from '@angular/router';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {Notification} from '../../api/models/notification';
import {TitleService} from '../../core/services/title.service';
import {NotificationsService} from '../../api/services/notifications.service';
import {UserNotificationsService} from '../../api/services/user-notifications.service';

@UntilDestroy()
@Component({
  selector: 'app-notifications-card',
  templateUrl: './notifications-card.component.html',
  styleUrls: ['./notifications-card.component.scss']
})
export class NotificationsCardComponent implements OnInit {

  notification: Notification;

  entityId = this.route.params.pipe(shareEntityId());

  constructor(
    private route: ActivatedRoute,
    private entityDataContext: EntityDataContext,
    private errorHandler: ErrorHandlerService,
    private titleService: TitleService
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Карточка уведомления');
    this.entityId
      .pipe(
        untilDestroyed(this)
      )
      .subscribe(
        id => {
          this.entityDataContext.notifications.getByIdLazy(id).subscribe(notification => {
            this.notification = notification;
          }, error => this.errorHandler.handle(error));
        },
        error => this.errorHandler.handle(error)
      );
  }

}
