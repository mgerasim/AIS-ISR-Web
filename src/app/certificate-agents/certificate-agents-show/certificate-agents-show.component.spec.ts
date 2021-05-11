import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateAgentsShowComponent } from './certificate-agents-show.component';

describe('CertificateAgentsShowComponent', () => {
  let component: CertificateAgentsShowComponent;
  let fixture: ComponentFixture<CertificateAgentsShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateAgentsShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateAgentsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
