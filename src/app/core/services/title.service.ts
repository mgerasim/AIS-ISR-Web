import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  public static RootTitle = 'АИС «Реестр ЭПБ»';

  constructor(
    private titleService: Title,
  ) {
    this.titleService.setTitle(TitleService.RootTitle);
  }

  getTitle(): string {
    return this.titleService.getTitle();
  }

  setTitle(title: string): void {
    this.titleService.setTitle((!title ? '' : `${title} | `) + TitleService.RootTitle);
  }
}
