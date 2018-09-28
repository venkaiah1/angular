import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSub1Component } from './home-sub1.component';

describe('HomeSub1Component', () => {
  let component: HomeSub1Component;
  let fixture: ComponentFixture<HomeSub1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSub1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSub1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
