import { Component, OnInit } from '@angular/core';
import {CertificateAgent} from '../../api/models/certificate-agent';

@Component({
  selector: 'app-certificate-agents-add',
  templateUrl: './certificate-agents-add.component.html',
  styleUrls: ['./certificate-agents-add.component.scss']
})
export class CertificateAgentsAddComponent implements OnInit {

  certificateAgent = {} as CertificateAgent;

  constructor() { }

  ngOnInit(): void {
  }

}
