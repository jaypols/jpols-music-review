import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenHomepage } from './open-homepage.component';

describe('OpenHomepageComponent', () => {
  let component: OpenHomepage;
  let fixture: ComponentFixture<OpenHomepage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenHomepage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenHomepage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
