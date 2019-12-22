import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureSongReviewComponent } from './secure-song-review.component';

describe('SecureSongReviewComponent', () => {
  let component: SecureSongReviewComponent;
  let fixture: ComponentFixture<SecureSongReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecureSongReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureSongReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
