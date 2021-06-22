import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallhostelsComponent } from './viewallhostels.component';

describe('ViewallhostelsComponent', () => {
  let component: ViewallhostelsComponent;
  let fixture: ComponentFixture<ViewallhostelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallhostelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallhostelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
