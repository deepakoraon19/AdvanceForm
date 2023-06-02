import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTagComponent } from './step-tag.component';

describe('StepTagComponent', () => {
  let component: StepTagComponent;
  let fixture: ComponentFixture<StepTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StepTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
