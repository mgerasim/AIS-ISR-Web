import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsibilityCentersAddComponent } from './responsibility-centers-add.component';

describe('ResponsibilityCentersAddComponent', () => {
  let component: ResponsibilityCentersAddComponent;
  let fixture: ComponentFixture<ResponsibilityCentersAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsibilityCentersAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsibilityCentersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
