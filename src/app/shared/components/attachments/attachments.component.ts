import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
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
import {AuthService} from '../../../auth/auth.service';
import {Role, Settings} from '../../../api/models';

@UntilDestroy()
@Component({
  selector: 'app-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.scss']
})
export class AttachmentsComponent implements OnInit, OnChanges, OnDestroy {

  @Input() equipment?: Equipment = undefined;
  @Input() certificate?: Certificate = undefined;
  @Input() category?: AttachmentCategory = undefined;
  @Input() settings?: Settings = undefined;
  @Input() title = 'Вложенные файлы';

  attachments: Attachment[];
  files: any[];
  uploadSaveUrl = '/api/files/upload';

  get isUserRole(): boolean {
    return this.authService.currentUser.account.role === Role.User;
  }

  constructor(
    public attachmentsService: AttachmentsService,
    public errorHandlerService: ErrorHandlerService,
    public entityDataContext: EntityDataContext,
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  private refresh(): void {
    this.entityDataContext.attachments.getListLazy()
      .pipe(untilDestroyed(this))
      .subscribe((attachments) => {
        if (this.equipment) {
          this.attachments = attachments.filter(x => x.equipmentId === this.equipment.id);
        } else if (this.certificate) {
          this.attachments = attachments.filter(x => x.certificateId === this.certificate.id);
        } else if (this.settings) {
          this.attachments = attachments.filter(x => x.settingsId === this.settings.id);
        } else {
          throw new Error('Должен быть указано оборудование или сертификат');
        }
        if (this.category !== undefined && this.category !== null) {
          this.attachments = this.attachments.filter(x => x.attachmentCategory === this.category);
        }
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.equipment && changes.equipment.currentValue) {
      this.equipment = changes.equipment.currentValue;
      this.refresh();
    }
    if (changes.certificate && changes.certificate.currentValue) {
      this.certificate = changes.certificate.currentValue;
      this.refresh();
    }
    if (changes.settings && changes.settings.currentValue) {
      this.settings = changes.settings.currentValue;
      this.refresh();
    }
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
      settingsId: this.settings?.id,
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
