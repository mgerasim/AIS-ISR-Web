import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatesCardAddComponent } from './certificates-card-add.component';

describe('CertificatesCardAddComponent', () => {
  let component: CertificatesCardAddComponent;
  let fixture: ComponentFixture<CertificatesCardAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificatesCardAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificatesCardAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
