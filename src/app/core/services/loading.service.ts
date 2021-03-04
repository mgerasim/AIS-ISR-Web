import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public loadingVisible$ = new Subject<boolean>();

  constructor() { }

  show(): void {
    this.loadingVisible$.next(true);
  }

  hide(): void {
    this.loadingVisible$.next(false);
  }
}
