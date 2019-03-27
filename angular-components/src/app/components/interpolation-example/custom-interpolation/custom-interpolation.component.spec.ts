import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomInterpolationComponent } from './custom-interpolation.component';

describe('CustomInterpolationComponent', () => {
  let component: CustomInterpolationComponent;
  let fixture: ComponentFixture<CustomInterpolationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomInterpolationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
