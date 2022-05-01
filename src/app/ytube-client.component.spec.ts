import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { YtubeClientComponent } from './ytube-client.component';
import { TITLE } from './constants';

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
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title ${TITLE}`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual(TITLE);
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(`${TITLE} app is running!`);
  });
});
