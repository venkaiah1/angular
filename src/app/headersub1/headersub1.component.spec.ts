import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Headersub1Component } from './headersub1.component';

describe('Headersub1Component', () => {
  let component: Headersub1Component;
  let fixture: ComponentFixture<Headersub1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Headersub1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Headersub1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
