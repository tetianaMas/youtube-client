import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatPanelItemComponent } from './stat-panel-item.component';

describe('StatPanelItemComponent', () => {
  let component: StatPanelItemComponent;
  let fixture: ComponentFixture<StatPanelItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatPanelItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatPanelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
