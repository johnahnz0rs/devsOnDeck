import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevShowDevsComponent } from './dev-show-devs.component';

describe('DevShowDevsComponent', () => {
  let component: DevShowDevsComponent;
  let fixture: ComponentFixture<DevShowDevsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevShowDevsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevShowDevsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
