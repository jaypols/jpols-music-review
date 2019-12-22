import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenSongReviewComponent } from './open-song-review.component';

describe('OpenSongReviewComponent', () => {
  let component: OpenSongReviewComponent;
  let fixture: ComponentFixture<OpenSongReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenSongReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenSongReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
