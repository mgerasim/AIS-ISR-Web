import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Equipment} from '../api/models/equipment';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public equipment$ = new BehaviorSubject<Equipment>(undefined);

  constructor() { }
}
