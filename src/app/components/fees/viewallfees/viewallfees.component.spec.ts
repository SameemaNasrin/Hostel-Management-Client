import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallfeesComponent } from './viewallfees.component';

describe('ViewallfeesComponent', () => {
  let component: ViewallfeesComponent;
  let fixture: ComponentFixture<ViewallfeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallfeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
