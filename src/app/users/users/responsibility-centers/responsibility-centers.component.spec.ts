import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsibilityCentersComponent } from './responsibility-centers.component';

describe('ResponsibilityCentersComponent', () => {
  let component: ResponsibilityCentersComponent;
  let fixture: ComponentFixture<ResponsibilityCentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsibilityCentersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsibilityCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
