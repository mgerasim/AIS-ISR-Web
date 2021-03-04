import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportResponseComponent } from './import-response.component';

describe('ImportResponseComponent', () => {
  let component: ImportResponseComponent;
  let fixture: ComponentFixture<ImportResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
