import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddallotmentComponent } from './addallotment.component';

describe('AddallotmentComponent', () => {
  let component: AddallotmentComponent;
  let fixture: ComponentFixture<AddallotmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddallotmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddallotmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
