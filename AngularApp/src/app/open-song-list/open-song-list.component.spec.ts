import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenSongListComponent } from './open-song-list.component';

describe('OpenSongListComponent', () => {
  let component: OpenSongListComponent;
  let fixture: ComponentFixture<OpenSongListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenSongListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenSongListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
