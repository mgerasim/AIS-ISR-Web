import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Equipment} from '../../../api/models/equipment';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {ErrorHandlerService} from '../../../core/errors/error-handler.service';
import {EntityDataContext} from '../../../core/entity/entity-data-context.service';
import {ResponsibilityCenter} from '../../../api/models/responsibility-center';
import {Examination} from '../../../api/models/examination';
import {Certificate} from '../../../api/models/certificate';
import {AttachmentCategory} from '../../../api/models';

@UntilDestroy()
@Component({
  selector: 'app-equipments-card',
  templateUrl: './equipment-card.component.html',
  styleUrls: ['./equipment-card.component.scss']
})
export class EquipmentCardComponent implements OnInit, OnDestroy, OnChanges {

  @Input() equipment: Equipment;

  get attachmentCategoryPassport(): AttachmentCategory {
    return AttachmentCategory.Passport;
  }
  get attachmentCategoryExamination(): AttachmentCategory {
    return AttachmentCategory.Examination;
  }
  get attachmentCategoryOther(): AttachmentCategory {
    return AttachmentCategory.Other;
  }

  responsibilityCenter: ResponsibilityCenter;

  examination: Examination;

  certificate: Certificate;

  constructor(
    private entityDataContext: EntityDataContext,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit(): void {
  }

  private refresh(): void {
    if (this.equipment.examination) {
      this.entityDataContext.examinations.getByIdLazy(this.equipment.examination.id)
        .pipe(untilDestroyed(this))
        .subscribe(examination => this.examination = examination, error => this.errorHandler.handle(error));
    }

    if (this.equipment.certificateId) {
      this.entityDataContext.certificates.getByIdLazy(this.equipment.certificateId)
        .pipe(untilDestroyed(this))
        .subscribe(certificate => this.certificate = certificate, error => this.errorHandler.handle(error));
    }

    this.entityDataContext.responsibilityCenters.getByIdLazy(this.equipment.responsibilityCenterId)
      .pipe(untilDestroyed(this))
      .subscribe(responsibilityCenter => {
        this.responsibilityCenter = responsibilityCenter;
      }, error => {
        this.errorHandler.handle(error);
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.equipment && changes.equipment.currentValue) {
      this.equipment = changes.equipment.currentValue;
      this.refresh();
    }
  }

  ngOnDestroy(): void {
  }
}
