import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {DataSourceItem} from './divisions-table/divisions-table.component';

@Injectable({
  providedIn: 'root'
})
export class DivisionsPageSidebarService {

  public dataSourceItem$ = new BehaviorSubject<DataSourceItem[]>(undefined);

  constructor() { }
}
