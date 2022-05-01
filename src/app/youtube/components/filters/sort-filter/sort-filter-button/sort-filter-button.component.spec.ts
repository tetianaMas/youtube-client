import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortFilterButtonComponent } from './sort-filter-button.component';

describe('SortFilterButtonComponent', () => {
  let component: SortFilterButtonComponent;
  let fixture: ComponentFixture<SortFilterButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortFilterButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortFilterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
