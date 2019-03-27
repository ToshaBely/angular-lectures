import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationExampleComponent } from './interpolation-example.component';

describe('InterpolationExampleComponent', () => {
  let component: InterpolationExampleComponent;
  let fixture: ComponentFixture<InterpolationExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterpolationExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
