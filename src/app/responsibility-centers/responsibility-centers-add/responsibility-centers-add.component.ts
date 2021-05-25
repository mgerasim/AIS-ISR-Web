import { Component, OnInit } from '@angular/core';
import {CertificateAgent} from '../../api/models/certificate-agent';
import {ResponsibilityCenter} from '../../api/models/responsibility-center';

@Component({
  selector: 'app-responsibility-centers-add',
  templateUrl: './responsibility-centers-add.component.html',
  styleUrls: ['./responsibility-centers-add.component.scss']
})
export class ResponsibilityCentersAddComponent implements OnInit {

  responsibilityCenter = {} as ResponsibilityCenter;

  constructor() { }

  ngOnInit(): void {
  }

}
