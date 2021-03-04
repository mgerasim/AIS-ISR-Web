import {Component, Input, OnInit} from '@angular/core';
import {Certificate} from '../../api/models/certificate';
import {CertificateType} from '../../api/models/certificate-type';
import {CertificateAgent} from '../../api/models/certificate-agent';
import {EntityDataContext} from '../../core/entity/entity-data-context.service';
import {ErrorHandlerService} from '../../core/errors/error-handler.service';
import {CertificatesService} from '../../api/services/certificates.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {combineLatest} from 'rxjs';
import {showSuccess} from '../../shared/utils/message-utils';
import {NavigatorService} from '../../core/routing/navigator.service';

@UntilDestroy()
@Component({
  selector: 'app-certificates-card-form',
  templateUrl: './certificates-card-form.component.html',
  styleUrls: ['./certificates-card-form.component.scss']
})
export class CertificatesCardFormComponent implements OnInit {

  @Input() certificate: Certificate;

  certificateTypes: CertificateType[];

  certificateAgents: CertificateAgent[];

  constructor(
    public entityDataContext: EntityDataContext,
    public errorHandler: ErrorHandlerService,
    public certificatesService: CertificatesService,
    public navigator: NavigatorService
  ) {

  }

  ngOnInit(): void {
    combineLatest([
      this.entityDataContext.certificateTypes.getListLazy(),
      this.entityDataContext.certificateAgents.getListLazy()
    ]).pipe(untilDestroyed(this)).subscribe(([certificateTypes, certificateAgents]) => {
      this.certificateTypes = certificateTypes;
      this.certificateAgents = certificateAgents;
      certificateAgents = certificateAgents;
    }, error => {
      this.errorHandler.handle(error);
    });
  }

  async save(): Promise<void> {
    try {
      if (this.certificate.id) {
        /// TODO: Переделать на Core сервис
        await this.certificatesService.apiCertificatesIdPut({id: this.certificate?.id, body: this.certificate}).toPromise();
        showSuccess(`Сертификат ${this.certificate.title} успешно обновлен`);
        this.entityDataContext.certificates.updateOneInCache(this.certificate);
        this.navigator.toCertificateCard(this.certificate.id);
      } else {
        this.certificate = await this.certificatesService.apiCertificatesPost$Json({body: this.certificate}).toPromise();
        showSuccess(`Сертификат ${this.certificate.title} успешно создан`);
        this.entityDataContext.certificates.addOneToCache(this.certificate);
        this.navigator.toCertificateCard(this.certificate.id);
      }
    }
    catch (e) {
      this.errorHandler.handle(e);
    }
  }
}
