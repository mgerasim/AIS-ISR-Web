import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateAgentsEditComponent } from './certificate-agents-edit.component';

describe('CertificateAgentsEditComponent', () => {
  let component: CertificateAgentsEditComponent;
  let fixture: ComponentFixture<CertificateAgentsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateAgentsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateAgentsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
