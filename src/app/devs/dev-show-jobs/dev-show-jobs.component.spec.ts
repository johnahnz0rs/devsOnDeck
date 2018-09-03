import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevShowJobsComponent } from './dev-show-jobs.component';

describe('DevShowJobsComponent', () => {
  let component: DevShowJobsComponent;
  let fixture: ComponentFixture<DevShowJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevShowJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevShowJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
