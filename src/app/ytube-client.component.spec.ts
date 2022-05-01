import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { YtubeClientComponent } from './ytube-client.component';

describe('YtubeClientComponent', () => {
  let fixture: ComponentFixture<YtubeClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [YtubeClientComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YtubeClientComponent);
  });

  it('should create the app', () => {
    fixture = TestBed.createComponent(YtubeClientComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
