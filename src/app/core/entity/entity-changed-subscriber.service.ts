import {Injectable, Type} from "@angular/core";
import {Subscription} from "rxjs";
import {EntityChangedHubService} from '../server-notifications/entity-changed-hub.service';
import {EntityChangedNotificationsService} from '../server-notifications/entity-changed-notifications.service';
import {ErrorHandlerService} from '../errors/error-handler.service';
import {EntityDataContext} from './entity-data-context.service';
import {EntityChangedNotifyParameters} from '../../api/models/entity-changed-notify-parameters';
import {EntityOperationType} from '../../api/models';

@Injectable({
    providedIn: "root",
})
export class EntityChangedSubscriberService {
    subscriptions: Subscription[] = [];

    constructor(
        private entityChangedHub: EntityChangedHubService,
        private serverNotificationService: EntityChangedNotificationsService,
        private errorHandler: ErrorHandlerService,
        private entityDataContext: EntityDataContext
    ) {}

    async subscribeInitializeAndSetEmptySubs(): Promise<void> {
        await this.entityChangedHub.initialize();
        this.subscriptions = [];
    }

    subscribeEntityChanged(): void {
        this.subscriptions.push(this.subscribeAndAddEntityChangedHandler());
    }

    async unsubscribeAllEntitiesChanged(): Promise<void> {
        this.subscriptions.forEach(s => s.unsubscribe());

        // Даем время 1 сек отписаться от серверных уведомлений.
        await new Promise(resolve => setTimeout(resolve, 1000));

        return this.entityChangedHub.close();
    }

    subscribeAndAddEntityChangedHandler(): Subscription {
        return this.serverNotificationService
            .subscribeEntityChanged()
            .subscribe((data: EntityChangedNotifyParameters) => {
                const service = this.entityDataContext.getEntityCollectionService(data.entityType);

                switch (data.operation) {
                  case EntityOperationType.Create: {
                    service.addOneToCache(data.entity);
                    break;
                  }
                  case EntityOperationType.Update: {
                    service.upsertOneInCache(data.entity);
                    break;
                  }
                  case EntityOperationType.Delete: {
                    service.delete(data.entity);
                    break;
                  }
                }
              }, error =>
                this.errorHandler.handle(error)
            );
    }
}
