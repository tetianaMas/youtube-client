import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormToggleBtnComponent } from './form-toggle-btn.component';

describe('FormToggleBtnComponent', () => {
  let component: FormToggleBtnComponent;
  let fixture: ComponentFixture<FormToggleBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormToggleBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormToggleBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
