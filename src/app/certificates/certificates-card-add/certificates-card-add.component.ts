import { Component, OnInit } from '@angular/core';
import {Certificate} from '../../api/models/certificate';

@Component({
  selector: 'app-certificates-card-add',
  templateUrl: './certificates-card-add.component.html',
  styleUrls: ['./certificates-card-add.component.scss']
})
export class CertificatesCardAddComponent implements OnInit {

  certificate = {} as Certificate;

  constructor() { }

  ngOnInit(): void {
  }

}
