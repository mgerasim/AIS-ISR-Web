import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatesCardEditComponent } from './certificates-card-edit.component';

describe('CertificatesCardEditComponent', () => {
  let component: CertificatesCardEditComponent;
  let fixture: ComponentFixture<CertificatesCardEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificatesCardEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificatesCardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
