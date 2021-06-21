import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallstudentComponent } from './viewallstudent.component';

describe('ViewallstudentComponent', () => {
  let component: ViewallstudentComponent;
  let fixture: ComponentFixture<ViewallstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
