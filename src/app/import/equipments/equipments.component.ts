import {Component, OnDestroy, OnInit} from '@angular/core';
import {FileRestrictions} from '@progress/kendo-angular-upload';
import {ImportResponse} from '../../api/models/import-response';
import {ImportService} from '../../api/services/import.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {ErrorHandlerService} from '../../core/errors/error-handler.service';
import {TitleService} from '../../core/services/title.service';
import {ServerNotificationsService} from '../../core/server-notifications/server-notifications.service';
import {SubscribeOperation} from '../../api/models/subscribe-operation';

@UntilDestroy()
@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.scss']
})
export class EquipmentsComponent implements OnInit, OnDestroy {

  uploadSaveUrl = '/api/import';

  importResponse: ImportResponse;

  public myRestrictions: FileRestrictions = {
    allowedExtensions: ['xlsx']
  };

  constructor(
    private importService: ImportService,
    private serverNotificationsService: ServerNotificationsService,
    private errorHandler: ErrorHandlerService,
    private titleService: TitleService,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Импорт оборудования');
    this.importService.apiImportGet$Json()
      .pipe(untilDestroyed(this))
      .subscribe(importResponse => {
      this.importResponse = importResponse;
      this.subscribeOnImportResponseChanged();
    }, error => this.errorHandler.handle(error));
  }

  private subscribeOnImportResponseChanged(): void {
    this.serverNotificationsService.subscribe(SubscribeOperation.Import)
      .pipe(untilDestroyed(this))
      .subscribe(response => {
        this.importResponse = response;
      }, error => this.errorHandler.handle(error));
  }

  ngOnDestroy(): void {
  }

}
