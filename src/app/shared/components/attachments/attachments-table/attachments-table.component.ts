import {Component, Input, OnInit} from '@angular/core';
import {DialogService} from '@progress/kendo-angular-dialog';
import {saveAs} from 'file-saver';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Attachment} from '../../../../api/models/attachment';
import {Equipment} from '../../../../api/models/equipment';
import {ErrorHandlerService} from '../../../../core/errors/error-handler.service';
import {FilesService} from '../../../../api/services/files.service';
import {EntityDataContext} from '../../../../core/entity/entity-data-context.service';
import {AttachmentsService} from '../../../../api/services/attachments.service';
import {RequestBuilder} from '../../../../api/request-builder';
import {StrictHttpResponse} from '../../../../api/strict-http-response';
import {showConfirmation} from '../../../utils/dialog-utils';

@Component({
  selector: 'app-attachments-table',
  templateUrl: './attachments-table.component.html',
  styleUrls: ['./attachments-table.component.scss']
})
export class AttachmentsTableComponent implements OnInit {
  @Input() attachments: Attachment[];

  constructor(
    private dialogService: DialogService,
    private errorHandlerService: ErrorHandlerService,
    private attachmentsService: AttachmentsService,
    private entityDataContext: EntityDataContext,
    private filesService: FilesService,
    protected http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  onCellDblClick(e: {data: Attachment}): void {

    const attachment = e.data;

    this.downloadAttachment(attachment);
  }

  private downloadAttachment(attachment: Attachment): void {
    this.apiFilesIdGet$Blob$Response({id: attachment.fileId})
      .subscribe((content) => {
        saveAs(content, attachment.title);
      });
  }

  apiFilesIdGet$Blob$Response(params: {
    id: number;
  }): Observable<Blob> {

    const rb = new RequestBuilder(``, FilesService.ApiFilesIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        const response = r as StrictHttpResponse<Blob>;
        return response.body as Blob;
      })
    );
  }


  onToolbarPreparing(e: any): void {
    e.toolbarOptions.items.push({
      location: 'before',
      template: 'titleTemplate',
    });
  }

  async delete(attachment: Attachment): Promise<void> {
    try {
      const content = `Удалить файл ${attachment.title} созданный ${attachment.createdAt} ?`;
      const result = await showConfirmation(this.dialogService, content).toPromise();
      if (result === false) {
        return;
      }
      await this.attachmentsService.apiAttachmentsIdDelete$Json({id: attachment.id}).toPromise();
      this.entityDataContext.attachments.removeOneFromCache(attachment);
    }
    catch (e) {
      this.errorHandlerService.handle(e);
    }
  }

  download(attachment: Attachment): void {
    this.downloadAttachment(attachment);
  }
}
