import {Component, Input, OnInit} from '@angular/core';
import {CertificateAgent} from '../../api/models/certificate-agent';
import {EntityDataContext} from '../../core/entity/entity-data-context.service';
import {ErrorHandlerService} from '../../core/errors/error-handler.service';
import {CertificateAgentsService} from '../../api/services/certificate-agents.service';
import {NavigatorService} from '../../core/routing/navigator.service';
import {showSuccess} from '../../shared/utils/message-utils';
import {ResponsibilityCenter} from '../../api/models/responsibility-center';
import {ResponsibilityCentersService} from '../../api/services/responsibility-centers.service';

@Component({
  selector: 'app-responsibility-centers-form',
  templateUrl: './responsibility-centers-form.component.html',
  styleUrls: ['./responsibility-centers-form.component.scss']
})
export class ResponsibilityCentersFormComponent implements OnInit {

  @Input() responsibilityCenter: ResponsibilityCenter;
  @Input() readonly = false;

  constructor(
    public entityDataContext: EntityDataContext,
    public errorHandler: ErrorHandlerService,
    public responsibilityCentersService: ResponsibilityCentersService,
    public navigator: NavigatorService
  ) { }

  ngOnInit(): void {
  }

  async save(): Promise<void> {
    try {
      if (this.responsibilityCenter.id) {
        await this.responsibilityCentersService.apiResponsibilityCentersIdPut({id: this.responsibilityCenter?.id, body: this.responsibilityCenter}).toPromise();
        showSuccess(`Центр ответсвенности ${this.responsibilityCenter.title} успешно обновлен`);
        this.navigator.toResponsibilityCenters();
      } else {
        this.responsibilityCenter = await this.responsibilityCentersService.apiResponsibilityCentersPost$Json({body: this.responsibilityCenter}).toPromise();
        showSuccess(`Центр ответсвенности ${this.responsibilityCenter.title} успешно создан`);
        this.navigator.toCertificateAgentShow(this.responsibilityCenter.id);
      }
    }
    catch (e) {
      this.errorHandler.handle(e);
    }
  }

}
