import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallvisitorComponent } from './viewallvisitor.component';

describe('ViewallvisitorComponent', () => {
  let component: ViewallvisitorComponent;
  let fixture: ComponentFixture<ViewallvisitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallvisitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallvisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
