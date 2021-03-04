import {Injectable, Type} from "@angular/core";
import {Observable, Subscription} from 'rxjs';
import {ErrorHandlerService} from "../errors/error-handler.service";
import {IncidentCountChangedHubService} from './incident-count-changed-hub.service';
import {IncidentCountChangedNotificationsService} from './incident-count-changed-notifications.service';
import {ImportResponseHubService} from './import-response-hub.service';
import {ImportResponseNotificationsService} from './import-response-notifications.service';
import {ImportResponse} from '../../api/models/import-response';

@Injectable({
    providedIn: "root",
})
export class ImportResponseSubscriberService {
    subscriptions: Subscription[] = [];

    constructor(
        private hub: ImportResponseHubService,
        private serverNotificationService: ImportResponseNotificationsService,
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

    subscribeAndAddEntityChangedHandler(): Observable<ImportResponse> {
        return this.serverNotificationService
            .subscribeEntityChanged();
    }
}
