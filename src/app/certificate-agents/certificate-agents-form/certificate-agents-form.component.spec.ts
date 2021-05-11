import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateAgentsFormComponent } from './certificate-agents-form.component';

describe('CertificateAgentsFormComponent', () => {
  let component: CertificateAgentsFormComponent;
  let fixture: ComponentFixture<CertificateAgentsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateAgentsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateAgentsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
