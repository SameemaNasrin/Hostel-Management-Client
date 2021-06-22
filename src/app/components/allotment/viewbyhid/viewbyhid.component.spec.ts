import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbyhidComponent } from './viewbyhid.component';

describe('ViewbyhidComponent', () => {
  let component: ViewbyhidComponent;
  let fixture: ComponentFixture<ViewbyhidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbyhidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbyhidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
