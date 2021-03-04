import {Injectable, Type} from "@angular/core";
import {Observable, Subscription} from 'rxjs';
import {ErrorHandlerService} from "../errors/error-handler.service";
import {IncidentCountChangedHubService} from './incident-count-changed-hub.service';
import {IncidentCountChangedNotificationsService} from './incident-count-changed-notifications.service';
import {NotificationCountChangedNotificationsService} from './notification-count-changed-notifications.service';
import {NotificationCountChangedHubService} from './notification-count-changed-hub.service';

@Injectable({
    providedIn: "root",
})
export class NotificationCountChangedSubscriberService {
    subscriptions: Subscription[] = [];

    constructor(
        private hub: NotificationCountChangedHubService,
        private serverNotificationService: NotificationCountChangedNotificationsService,
        private errorHandler: ErrorHandlerService
    ) {}

    async subscribeInitializeAndSetEmptySubs(): Promise<void> {
        await this.hub.initialize();
        this.subscriptions = [];
    }

    async unsubscribeAllEntitiesChanged(): Promise<void> {
        this.subscriptions.forEach(s => s.unsubscribe());

        // Даем время 1 сек отписаться от серверных уведомлений.
        await new Promise(resolve => setTimeout(resolve, 1000));

        return this.hub.close();
    }

    subscribeAndAddEntityChangedHandler(): Observable<number> {
        return this.serverNotificationService
            .subscribeEntityChanged();
    }
}
