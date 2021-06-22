import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddwardenComponent } from './addwarden.component';

describe('AddwardenComponent', () => {
  let component: AddwardenComponent;
  let fixture: ComponentFixture<AddwardenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddwardenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddwardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
