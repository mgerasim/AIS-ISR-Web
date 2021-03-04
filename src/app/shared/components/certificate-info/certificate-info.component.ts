import {Component, Input, OnInit} from '@angular/core';
import {Certificate} from '../../../api/models/certificate';
import {CertificateAgent} from '../../../api/models/certificate-agent';
import {CertificateType} from '../../../api/models/certificate-type';
import {combineLatest} from 'rxjs';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {EntityDataContext} from '../../../core/entity/entity-data-context.service';
import {ErrorHandlerService} from '../../../core/errors/error-handler.service';
import { toDate } from '../../utils/date-utils';

@UntilDestroy()
@Component({
  selector: 'app-certificate-info',
  templateUrl: './certificate-info.component.html',
  styleUrls: ['./certificate-info.component.scss']
})
export class CertificateInfoComponent implements OnInit {

  @Input() title: string;

  @Input() certificate: Certificate;

  certificateAgent: CertificateAgent;

  certificateType: CertificateType;

  constructor(
    private entityDataContext: EntityDataContext,
    private errorHandlerService: ErrorHandlerService
  ) { }

  ngOnInit(): void {
    combineLatest([
      this.entityDataContext.certificateAgents.getByIdLazy(this.certificate.certificateAgentId),
      this.entityDataContext.certificateTypes.getByIdLazy(this.certificate.certificateTypeId)
    ]).pipe(untilDestroyed(this)).subscribe(([certificateAgent, certificateType]) => {
      this.certificateAgent = certificateAgent;
      this.certificateType = certificateType;
    }, error => this.errorHandlerService.handle(error));
  }

  toDate(str): Date {
    return toDate(str);
  }
}
