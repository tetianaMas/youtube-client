import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFormButtonsComponent } from './custom-form-buttons.component';

describe('CustomFormButtonsComponent', () => {
  let component: CustomFormButtonsComponent;
  let fixture: ComponentFixture<CustomFormButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomFormButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFormButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
