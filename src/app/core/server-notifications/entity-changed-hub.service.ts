import {Injectable} from "@angular/core";
import * as signalR from "@microsoft/signalr";
import {HttpTransportType, HubConnection} from '@microsoft/signalr';
import {Subject} from "rxjs";
import {EntityChangedNotifyParameters} from '../../api/models/entity-changed-notify-parameters';

@Injectable({
    providedIn: "root",
})
export class EntityChangedHubService {
    private hubConnection?: signalR.HubConnection;
    entityChangedNotify$ = new Subject<EntityChangedNotifyParameters>();

    private get url(): string {
        return '/api/rpc/entityChangedHub';
    }

    constructor() {
    }

    initialize(): Promise<void> {
        this.hubConnection = this.createConnection();
        this.registerEvents(this.hubConnection);
        return this.startConnection(this.hubConnection);
    }

    close(): Promise<void> {
        if (!this.hubConnection) {
            throw new Error('Соединение не установлено');
        }

        this.hubConnection.off('Change Entity Notify');

        const promise = this.hubConnection.stop().then(() => console.log('Connection stopped...'));
        this.hubConnection = undefined;

        return promise;
    }

    private createConnection(): HubConnection {
        return new signalR.HubConnectionBuilder()
            .withUrl(this.url, {
                transport: HttpTransportType.LongPolling,
            })
            .withAutomaticReconnect()
            .configureLogging(signalR.LogLevel.Debug)
            .build();
    }

    private startConnection(hubConnection: signalR.HubConnection): Promise<void> {
        return hubConnection
            .start()
            .then(() => console.log('Connection started...'))
            .catch(err => {
                console.log('Error while starting connection: ' + err);
            });
    }

    private registerEvents(hubConnection: signalR.HubConnection): void {
        hubConnection.on('EntityChangedNotify', (entityChangedNotifyParameters) => {
          this.entityChangedNotify$.next(entityChangedNotifyParameters);
        });
    }

    subscribe(): Promise<void> {
        if (!this.hubConnection) {
            throw new Error('Соединение не установлено');
        }

        return this.hubConnection.invoke('Subscribe');
    }

    unsubscribe(): Promise<void> {
        if (!this.hubConnection) {
            throw new Error('Соединение не установлено');
        }

        return this.hubConnection.invoke('Unsubscribe');
    }
}
