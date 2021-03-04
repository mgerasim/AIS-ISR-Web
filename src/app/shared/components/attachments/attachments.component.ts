import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {Equipment} from '../../../api/models/equipment';
import {Attachment} from '../../../api/models/attachment';
import {FilesService} from '../../../api/services/files.service';
import {ErrorHandlerService} from '../../../core/errors/error-handler.service';
import {AttachmentsService} from '../../../api/services/attachments.service';
import {EntityDataContext} from '../../../core/entity/entity-data-context.service';
import {showError, showSuccess} from '../../utils/message-utils';
import {Certificate} from '../../../api/models/certificate';
import {SuccessEvent, UploadEvent} from '@progress/kendo-angular-upload';
import {AttachmentCategory} from '../../../api/models/attachment-category';

@UntilDestroy()
@Component({
  selector: 'app-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.scss']
})
export class AttachmentsComponent implements OnInit, OnDestroy {

  @Input() equipment?: Equipment;
  @Input() certificate?: Certificate;
  @Input() category?: AttachmentCategory = undefined;
  @Input() title = 'Вложенные файлы';

  attachments: Attachment[];
  files: any[];
  uploadSaveUrl = '/api/files/upload';

  constructor(
    public attachmentsService: AttachmentsService,
    public errorHandlerService: ErrorHandlerService,
    public entityDataContext: EntityDataContext
  ) { }

  ngOnInit(): void {
    this.entityDataContext.attachments.getListLazy()
      .pipe(untilDestroyed(this))
      .subscribe((attachments) => {
        if (this.equipment) {
          this.attachments = attachments.filter(x => x.equipmentId === this.equipment.id);
        } else if (this.certificate) {
          this.attachments = attachments.filter(x => x.certificateId === this.certificate.id);
        } else {
          throw new Error('Должен быть указано оборудование или сертификат');
        }
        if (this.category !== undefined && this.category !== null) {
          this.attachments = this.attachments.filter(x => x.attachmentCategory === this.category);
        }
      });
  }

  ngOnDestroy(): void {
  }

  success(data: SuccessEvent): void {
    const fileId = data.response.body.toString();

    const file = data.files[0].rawFile;

    const attachment = {
      contentType: file.type,
      equipmentId: this.equipment?.id,
      certificateId: this.certificate?.id,
      attachmentCategory: this.category,
      fileId,
      lastModified: file.lastModified,
      size: file.size,
      title: file.name
    } as Attachment;

    this.attachmentsService.apiAttachmentsPost$Json({body: attachment}).subscribe(attachment => {
      showSuccess(`Файл ${attachment.title} успешно загружен!`);
      this.entityDataContext.attachments.addOneToCache(attachment);
      this.files = [];
    }, error => {
      showError(error.error);
      this.files = [];
    });
  }
}
