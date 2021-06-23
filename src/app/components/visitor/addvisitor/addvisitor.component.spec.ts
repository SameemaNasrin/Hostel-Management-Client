import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvisitorComponent } from './addvisitor.component';

describe('AddvisitorComponent', () => {
  let component: AddvisitorComponent;
  let fixture: ComponentFixture<AddvisitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddvisitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
