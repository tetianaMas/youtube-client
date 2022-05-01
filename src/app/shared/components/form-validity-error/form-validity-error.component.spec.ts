import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidityErrorComponent } from './form-validity-error.component';

describe('FormValidityErrorComponent', () => {
  let component: FormValidityErrorComponent;
  let fixture: ComponentFixture<FormValidityErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormValidityErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidityErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
