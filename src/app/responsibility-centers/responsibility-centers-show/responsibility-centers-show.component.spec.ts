import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsibilityCentersShowComponent } from './responsibility-centers-show.component';

describe('ResponsibilityCentersShowComponent', () => {
  let component: ResponsibilityCentersShowComponent;
  let fixture: ComponentFixture<ResponsibilityCentersShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsibilityCentersShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsibilityCentersShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
