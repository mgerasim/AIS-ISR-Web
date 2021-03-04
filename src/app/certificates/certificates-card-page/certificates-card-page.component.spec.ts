import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatesCardPageComponent } from './certificates-card-page.component';

describe('CertificatesCardPageComponent', () => {
  let component: CertificatesCardPageComponent;
  let fixture: ComponentFixture<CertificatesCardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificatesCardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificatesCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
