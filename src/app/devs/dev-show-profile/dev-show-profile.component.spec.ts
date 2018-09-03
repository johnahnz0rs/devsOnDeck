import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevShowProfileComponent } from './dev-show-profile.component';

describe('DevShowProfileComponent', () => {
  let component: DevShowProfileComponent;
  let fixture: ComponentFixture<DevShowProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevShowProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevShowProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
