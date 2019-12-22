import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureSongListComponent } from './secure-song-list.component';

describe('SecureSongListComponent', () => {
  let component: SecureSongListComponent;
  let fixture: ComponentFixture<SecureSongListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecureSongListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureSongListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
