import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevShowOrgsComponent } from './dev-show-orgs.component';

describe('DevShowOrgsComponent', () => {
  let component: DevShowOrgsComponent;
  let fixture: ComponentFixture<DevShowOrgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevShowOrgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevShowOrgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
