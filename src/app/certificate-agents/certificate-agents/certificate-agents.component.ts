import {Component, OnDestroy, OnInit} from '@angular/core';
import {CertificateAgent} from '../../api/models/certificate-agent';
import {EntityDataContext} from '../../core/entity/entity-data-context.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {ErrorHandlerService} from '../../core/errors/error-handler.service';
import {NavigatorService} from '../../core/routing/navigator.service';

@UntilDestroy()
@Component({
  selector: 'app-certificate-agents',
  templateUrl: './certificate-agents.component.html',
  styleUrls: ['./certificate-agents.component.scss']
})
export class CertificateAgentsComponent implements OnInit, OnDestroy {
  certificateAgents: CertificateAgent[];
  selectedRowKeys: CertificateAgent[];

  constructor(
    private entityDataContext: EntityDataContext,
    private errorHandler: ErrorHandlerService,
    private navigatorService: NavigatorService,
  ) { }

  ngOnInit(): void {
    this.entityDataContext.certificateAgents.getListLazy()
      .pipe(untilDestroyed(this))
      .subscribe(certificateAgents => {
        this.certificateAgents = certificateAgents;
      }, error => {
        this.errorHandler.handle(error);
      });
  }

  ngOnDestroy(): void {
  }

  onCellDblClick($event: any) {

  }

  onToolbarPreparing(e: any) {
    for (const item of e.toolbarOptions.items) {
      item.location = 'after';
      item.showText = '';
    }
    e.toolbarOptions.items.push({
      location: 'before',
      template: 'actionAddTemplate',
    });
    e.toolbarOptions.items.push({
      location: 'before',
      template: 'actionEditTemplate',
    });
    e.toolbarOptions.items.push({
      location: 'before',
      template: 'actionShowTemplate',
    });
    e.toolbarOptions.items.push({
      location: 'center',
      template: 'titleTemplate',
    });
  }

  add(): void {
    this.navigatorService.toCertificateAgentAdd();
  }

  edit(): void {
    if (this.selectedRowKeys === undefined || this.selectedRowKeys.length === 0) {
      throw new Error('Отсутствует выделенние организации');
    }
    const certificate = this.selectedRowKeys[0];

    this.navigatorService.toCertificateAgentEdit(certificate.id);
  }

  show(): void {
    if (this.selectedRowKeys === undefined || this.selectedRowKeys.length === 0) {
      throw new Error('Отсутствует выделенние организации');
    }
    const certificate = this.selectedRowKeys[0];

    this.navigatorService.toCertificateAgentShow(certificate.id);
  }
}
