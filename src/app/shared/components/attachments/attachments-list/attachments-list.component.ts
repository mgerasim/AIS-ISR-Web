import {Component, Input, OnInit} from '@angular/core';
import {Attachment} from '../../../../api/models/attachment';
import {AttachmentsService} from '../../../../api/services/attachments.service';
import {Observable} from 'rxjs';
import {RequestBuilder} from '../../../../api/request-builder';
import {FilesService} from '../../../../api/services/files.service';
import {filter, map} from 'rxjs/operators';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {StrictHttpResponse} from '../../../../api/strict-http-response';
import {saveAs} from 'file-saver';
import {showConfirmation} from '../../../utils/dialog-utils';
import {DialogService} from '@progress/kendo-angular-dialog';
import {ErrorHandlerService} from '../../../../core/errors/error-handler.service';
import {EntityDataContext} from '../../../../core/entity/entity-data-context.service';

@Component({
  selector: 'app-attachments-list',
  templateUrl: './attachments-list.component.html',
  styleUrls: ['./attachments-list.component.scss']
})
export class AttachmentsListComponent implements OnInit {

  @Input() attachments: Attachment[];

  constructor(
    private dialogService: DialogService,
    private errorHandlerService: ErrorHandlerService,
    private attachmentsService: AttachmentsService,
    private entityDataContext: EntityDataContext,
    protected http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  select(attachment: Attachment): void {
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
}
