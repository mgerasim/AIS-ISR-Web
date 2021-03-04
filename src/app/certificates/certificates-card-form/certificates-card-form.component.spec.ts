import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatesCardFormComponent } from './certificates-card-form.component';

describe('CertificatesCardFormComponent', () => {
  let component: CertificatesCardFormComponent;
  let fixture: ComponentFixture<CertificatesCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificatesCardFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificatesCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
