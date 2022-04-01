import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { YtubeClientComponent } from './ytube-client.component';

describe('YtubeClientComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [YtubeClientComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(YtubeClientComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
