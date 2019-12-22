import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureHomepageComponent } from './secure-homepage.component';

describe('SecureHomepageComponent', () => {
  let component: SecureHomepageComponent;
  let fixture: ComponentFixture<SecureHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecureHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
