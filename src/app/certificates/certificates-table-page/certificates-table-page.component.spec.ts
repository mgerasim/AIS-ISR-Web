import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatesTablePageComponent } from './certificates-table-page.component';

describe('CertificatesTablePageComponent', () => {
  let component: CertificatesTablePageComponent;
  let fixture: ComponentFixture<CertificatesTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificatesTablePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificatesTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
