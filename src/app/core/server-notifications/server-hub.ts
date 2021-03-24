import {Injectable} from "@angular/core";
import * as signalR from "@microsoft/signalr";
import {HttpTransportType, HubConnection} from '@microsoft/signalr';
import {Subject} from "rxjs";
import {SubscribeEventResponse} from '../../api/models/subscribe-event-response';
import {SubscribeOperation} from '../../api/models/subscribe-operation';
import {AuthService} from '../../auth/auth.service';

@Injectable({
  providedIn: "root",
})
export class ServerHubService {
  private hubConnection?: signalR.HubConnection;
  notifyEvent = new Subject<SubscribeEventResponse>();

  private get url(): string {
    return '/api/rpc/serverHub';
  }

  constructor(
    private authService: AuthService,
  ) {

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

    this.hubConnection.off('Notify');

    const promise = this.hubConnection.stop().then(() => console.log('Connection stopped...'));
    this.hubConnection = undefined;
    return promise;
  }

  private createConnection(): HubConnection {
    return new signalR.HubConnectionBuilder()
      .withUrl(this.url, {
        accessTokenFactory: () => this.authService.token,
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
    hubConnection.on('Notify', (notificationParameters: SubscribeEventResponse) => {
      console.log(notificationParameters);
      this.notifyEvent.next(notificationParameters);
    });
  }

  subscribe(operation: SubscribeOperation): Promise<SubscribeEventResponse> {

    console.log(`ServerHub: subscribe: ${operation}`);

    if (!this.hubConnection) {
      throw new Error('Соединение не установлено');
    }

    return this.hubConnection.invoke('Subscribe', operation);
  }

  unsubscribe(operation: SubscribeOperation): Promise<void> {
    if (!this.hubConnection) {
      throw new Error('Соединение не установлено');
    }

    return this.hubConnection.invoke('Unsubscribe', operation);
  }
}
