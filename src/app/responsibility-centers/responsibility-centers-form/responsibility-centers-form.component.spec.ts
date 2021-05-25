import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsibilityCentersFormComponent } from './responsibility-centers-form.component';

describe('ResponsibilityCentersFormComponent', () => {
  let component: ResponsibilityCentersFormComponent;
  let fixture: ComponentFixture<ResponsibilityCentersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsibilityCentersFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsibilityCentersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
