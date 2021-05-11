import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateAgentsComponent } from './certificate-agents.component';

describe('CertificateAgentsComponent', () => {
  let component: CertificateAgentsComponent;
  let fixture: ComponentFixture<CertificateAgentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateAgentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
