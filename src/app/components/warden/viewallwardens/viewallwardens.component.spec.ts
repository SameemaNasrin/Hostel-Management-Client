import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallwardensComponent } from './viewallwardens.component';

describe('ViewallwardensComponent', () => {
  let component: ViewallwardensComponent;
  let fixture: ComponentFixture<ViewallwardensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallwardensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallwardensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
