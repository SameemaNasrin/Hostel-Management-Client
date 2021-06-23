import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallroomsComponent } from './viewallrooms.component';

describe('ViewallroomsComponent', () => {
  let component: ViewallroomsComponent;
  let fixture: ComponentFixture<ViewallroomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallroomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
