import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSubmitBlockComponent } from './form-submit-block.component';

describe('FormSubmitBlockComponent', () => {
  let component: FormSubmitBlockComponent;
  let fixture: ComponentFixture<FormSubmitBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSubmitBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSubmitBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
