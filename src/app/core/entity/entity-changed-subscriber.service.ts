import {Injectable, Type} from "@angular/core";
import {Subscription} from "rxjs";
import {ErrorHandlerService} from '../errors/error-handler.service';
import {EntityDataContext} from './entity-data-context.service';
import {EntityChangedNotifyParameters} from '../../api/models/entity-changed-notify-parameters';
import {EntityOperationType, SubscribeOperation} from '../../api/models';
import {ServerHubService} from '../server-notifications/server-hub';
import {ServerNotificationsService} from '../server-notifications/server-notifications.service';

@Injectable({
    providedIn: "root",
})
export class EntityChangedSubscriberService {
    subscriptions: Subscription[] = [];

    constructor(
        private serverHub: ServerHubService,
        private serverNotificationService: ServerNotificationsService,
        private errorHandler: ErrorHandlerService,
        private entityDataContext: EntityDataContext
    ) {}

    async subscribeInitializeAndSetEmptySubs(): Promise<void> {
        console.log('subscribeInitializeAndSetEmptySubs: Start');
        await this.serverHub.initialize();
        console.log('subscribeInitializeAndSetEmptySubs: End');
        this.subscriptions = [];
    }

    subscribeEntityChanged(): void {
        this.subscriptions.push(this.subscribeAndAddEntityChangedHandler());
    }

    async unsubscribeAllEntitiesChanged(): Promise<void> {
        this.subscriptions.forEach(s => s.unsubscribe());

        // Даем время 1 сек отписаться от серверных уведомлений.
        await new Promise(resolve => setTimeout(resolve, 1000));

        return this.serverHub.close();
    }

    subscribeAndAddEntityChangedHandler(): Subscription {
        return this.serverNotificationService
            .subscribe(SubscribeOperation.EntityChanged)
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
