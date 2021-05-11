import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateAgentsAddComponent } from './certificate-agents-add.component';

describe('CertificateAgentsAddComponent', () => {
  let component: CertificateAgentsAddComponent;
  let fixture: ComponentFixture<CertificateAgentsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateAgentsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateAgentsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
