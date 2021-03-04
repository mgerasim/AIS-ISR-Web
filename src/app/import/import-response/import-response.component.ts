import {Component, Input, OnInit} from '@angular/core';
import {ImportResponse} from '../../api/models/import-response';

@Component({
  selector: 'app-import-response',
  templateUrl: './import-response.component.html',
  styleUrls: ['./import-response.component.scss']
})
export class ImportResponseComponent implements OnInit {

  @Input() importResponse: ImportResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
