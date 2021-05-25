import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsibilityCentersEditComponent } from './responsibility-centers-edit.component';

describe('ResponsibilityCentersEditComponent', () => {
  let component: ResponsibilityCentersEditComponent;
  let fixture: ComponentFixture<ResponsibilityCentersEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsibilityCentersEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsibilityCentersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
