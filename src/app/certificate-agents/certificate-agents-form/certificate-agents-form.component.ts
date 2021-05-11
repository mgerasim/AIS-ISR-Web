import {Component, Input, OnInit} from '@angular/core';
import {CertificateAgent} from '../../api/models/certificate-agent';
import {showSuccess} from '../../shared/utils/message-utils';
import {EntityDataContext} from '../../core/entity/entity-data-context.service';
import {ErrorHandlerService} from '../../core/errors/error-handler.service';
import {CertificatesService} from '../../api/services/certificates.service';
import {NavigatorService} from '../../core/routing/navigator.service';
import {CertificateAgentsService} from '../../api/services/certificate-agents.service';

@Component({
  selector: 'app-certificate-agents-form',
  templateUrl: './certificate-agents-form.component.html',
  styleUrls: ['./certificate-agents-form.component.scss']
})
export class CertificateAgentsFormComponent implements OnInit {

  @Input() certificateAgent: CertificateAgent;
  @Input() readonly = false;

  constructor(
    public entityDataContext: EntityDataContext,
    public errorHandler: ErrorHandlerService,
    public certificateAgentsService: CertificateAgentsService,
    public navigator: NavigatorService
  ) { }

  ngOnInit(): void {
  }

  async save(): Promise<void> {
    try {
      if (this.certificateAgent.id) {
        /// TODO: Переделать на Core сервис
        await this.certificateAgentsService.apiCertificateAgentsIdPut({id: this.certificateAgent?.id, body: this.certificateAgent}).toPromise();
        showSuccess(`Сертификат ${this.certificateAgent.title} успешно обновлен`);
        //this.entityDataContext.certificates.updateOneInCache(this.certificate);
        this.navigator.toCertificateAgentShow(this.certificateAgent.id);
      } else {
        this.certificateAgent = await this.certificateAgentsService.apiCertificateAgentsPost$Json({body: this.certificateAgent}).toPromise();
        showSuccess(`Сертификат ${this.certificateAgent.title} успешно создан`);
//        this.entityDataContext.certificates.addOneToCache(this.certificate);
        this.navigator.toCertificateAgentShow(this.certificateAgent.id);
      }
    }
    catch (e) {
      this.errorHandler.handle(e);
    }
  }
}
