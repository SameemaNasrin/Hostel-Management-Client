import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteallotmentComponent } from './deleteallotment.component';

describe('DeleteallotmentComponent', () => {
  let component: DeleteallotmentComponent;
  let fixture: ComponentFixture<DeleteallotmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteallotmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteallotmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
